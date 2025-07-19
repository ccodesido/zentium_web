from fastapi import FastAPI, APIRouter, HTTPException, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Demo Request Models
class DemoRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr = Field(..., description="Professional email address")
    company: Optional[str] = Field(None, description="Company/clinic name")
    phone: Optional[str] = Field(None, description="Phone number")
    message: Optional[str] = Field(None, description="Additional message")
    status: str = Field(default="pending", description="pending, contacted, demo_scheduled, closed")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class DemoRequestCreate(BaseModel):
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: Optional[str] = None

class DemoRequestResponse(BaseModel):
    id: str
    email: str
    status: str
    created_at: datetime
    message: str = "Demo request submitted successfully"

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Demo Request Routes
@api_router.post("/demo-requests", response_model=DemoRequestResponse)
async def create_demo_request(input: DemoRequestCreate):
    try:
        # Check if email already exists
        existing_request = await db.demo_requests.find_one({"email": input.email})
        if existing_request:
            # Update existing request instead of creating duplicate
            update_data = {
                "updated_at": datetime.utcnow(),
                "status": "pending"  # Reset status to pending
            }
            if input.company:
                update_data["company"] = input.company
            if input.phone:
                update_data["phone"] = input.phone
            if input.message:
                update_data["message"] = input.message
                
            await db.demo_requests.update_one(
                {"email": input.email}, 
                {"$set": update_data}
            )
            
            updated_request = await db.demo_requests.find_one({"email": input.email})
            return DemoRequestResponse(
                id=updated_request["id"],
                email=updated_request["email"],
                status=updated_request["status"],
                created_at=updated_request["created_at"],
                message="Demo request updated successfully"
            )
        
        # Create new demo request
        demo_request_dict = input.dict()
        demo_request = DemoRequest(**demo_request_dict)
        
        # Insert into database
        result = await db.demo_requests.insert_one(demo_request.dict())
        
        return DemoRequestResponse(
            id=demo_request.id,
            email=demo_request.email,
            status=demo_request.status,
            created_at=demo_request.created_at
        )
        
    except Exception as e:
        logger.error(f"Error creating demo request: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit demo request")

@api_router.get("/demo-requests", response_model=List[DemoRequest])
async def get_demo_requests():
    """Admin endpoint to get all demo requests"""
    try:
        demo_requests = await db.demo_requests.find().sort("created_at", -1).to_list(1000)
        return [DemoRequest(**request) for request in demo_requests]
    except Exception as e:
        logger.error(f"Error fetching demo requests: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch demo requests")

@api_router.get("/demo-requests/stats")
async def get_demo_request_stats():
    """Get demo request statistics"""
    try:
        total_requests = await db.demo_requests.count_documents({})
        pending_requests = await db.demo_requests.count_documents({"status": "pending"})
        contacted_requests = await db.demo_requests.count_documents({"status": "contacted"})
        demo_scheduled = await db.demo_requests.count_documents({"status": "demo_scheduled"})
        
        return {
            "total_requests": total_requests,
            "pending_requests": pending_requests,
            "contacted_requests": contacted_requests,
            "demo_scheduled": demo_scheduled
        }
    except Exception as e:
        logger.error(f"Error fetching demo request stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch statistics")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
