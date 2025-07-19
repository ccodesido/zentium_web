# Zentium Assist - Frontend/Backend Integration Contracts

## Current Mock Data in Frontend

### Demo Request Form (LandingPage.jsx)
```javascript
// Current mock implementation
const handleDemoRequest = (e) => {
  e.preventDefault();
  alert(`Demo requested for: ${email}`);
  setEmail("");
};
```

**Mock Data:**
- Email capture form shows browser alert
- No actual data persistence
- No validation beyond HTML5 email type

## Backend API Endpoints to Implement

### 1. Demo Requests API

**POST /api/demo-requests**
```json
{
  "email": "user@example.com",
  "company": "Optional company name",
  "phone": "Optional phone number",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "id": "uuid",
  "email": "user@example.com", 
  "status": "pending",
  "created_at": "2025-01-27T10:30:00Z",
  "message": "Demo request submitted successfully"
}
```

**GET /api/demo-requests** (Admin endpoint)
```json
[
  {
    "id": "uuid",
    "email": "user@example.com",
    "company": "Psychology Clinic Inc",
    "phone": "+1-555-0123",
    "message": "Interested in AI features",
    "status": "pending",
    "created_at": "2025-01-27T10:30:00Z"
  }
]
```

### 2. Contact Form API (Future)

**POST /api/contact**
```json
{
  "name": "Dr. Jane Smith",
  "email": "jane@clinic.com",
  "subject": "Pricing inquiry",
  "message": "Need pricing for 10 psychologists"
}
```

## MongoDB Models to Create

### 1. DemoRequest Model
```python
class DemoRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str = Field(..., description="Professional email address")
    company: Optional[str] = Field(None, description="Company/clinic name")
    phone: Optional[str] = Field(None, description="Phone number")
    message: Optional[str] = Field(None, description="Additional message")
    status: str = Field(default="pending", description="pending, contacted, demo_scheduled, closed")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class DemoRequestCreate(BaseModel):
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    message: Optional[str] = None
```

### 2. Contact Model (Future)
```python
class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    status: str = Field(default="new")
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

## Frontend Integration Changes

### 1. Update LandingPage.jsx Demo Form

**Current:**
```javascript
const handleDemoRequest = (e) => {
  e.preventDefault();
  alert(`Demo requested for: ${email}`);
  setEmail("");
};
```

**New Implementation:**
```javascript
const handleDemoRequest = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/demo-requests`, {
      email: email
    });
    
    // Show success message
    setSubmissionStatus('success');
    setEmail("");
  } catch (error) {
    console.error('Demo request failed:', error);
    setSubmissionStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 2. Add State Management
```javascript
const [email, setEmail] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'
```

### 3. Update Form UI
- Add loading state to submit button
- Show success/error messages
- Disable form during submission
- Clear messages after timeout

## API Integration Plan

### Phase 1: Demo Requests (Current Priority)
1. ✅ Create DemoRequest model in backend
2. ✅ Implement POST /api/demo-requests endpoint
3. ✅ Implement GET /api/demo-requests endpoint (admin)
4. ✅ Update frontend form to use real API
5. ✅ Add proper error handling and success states

### Phase 2: Enhanced Features (Future)
1. Contact form API
2. Newsletter signup
3. Admin dashboard for demo requests
4. Email notifications
5. Analytics tracking

## Error Handling Strategy

### Backend Validation
- Email format validation
- Rate limiting for demo requests
- Duplicate email handling
- Input sanitization

### Frontend Error States
- Network errors (show retry option)
- Validation errors (show field-specific messages)
- Success confirmation (show thank you message)
- Loading states (disable form, show spinner)

## Security Considerations

### Backend
- Input validation and sanitization
- Rate limiting on demo request endpoint
- CORS configuration
- Email format validation

### Frontend
- Client-side validation as UX enhancement
- Proper error message display
- Form reset after successful submission

## Testing Strategy

### Backend Testing
- Unit tests for demo request creation
- API endpoint tests
- MongoDB integration tests
- Validation error tests

### Frontend Testing
- Form submission success/error flows
- Loading state behavior
- Email validation
- API integration tests

## Integration Checklist

- [ ] Backend: Create DemoRequest model
- [ ] Backend: Implement POST /api/demo-requests
- [ ] Backend: Implement GET /api/demo-requests  
- [ ] Backend: Add validation and error handling
- [ ] Frontend: Update form to use API
- [ ] Frontend: Add loading and success/error states
- [ ] Frontend: Remove mock alert implementation
- [ ] Testing: Verify end-to-end demo request flow