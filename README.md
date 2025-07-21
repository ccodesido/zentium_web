# ZentiumAssist - Sistema de Gestión Clínica con IA

## 📋 Descripción

ZentiumAssist es una aplicación web institucional moderna que presenta un sistema de gestión para profesionales en psicología, asistido por inteligencia artificial. La plataforma está diseñada para mostrar a potenciales clientes e instituciones toda la información sobre la aplicación y sus funcionalidades.

## 🚀 Características Principales

### Páginas Disponibles
- **Página de Inicio**: Presentación atractiva del sistema con hero section y estadísticas
- **Sobre Nosotros**: Misión, valores, equipo y uso de inteligencia artificial
- **Funcionalidades**: Detalle completo de todas las características del sistema
- **Contacto**: Formulario de consultas con mapa de ubicación

### Funcionalidades Destacadas
- ✅ Gestión de profesionales e instituciones
- ✅ Historia clínica digital
- ✅ Asistente integral IA para entrevistas
- ✅ Tests psicológicos y cuestionarios
- ✅ Diagnóstico y generación de informes
- ✅ Asignación y seguimiento de tareas (tratamientos)
- ✅ Métodos de abordaje y entrenamiento mental
- ✅ Chatbot para consultas urgentes

## 🛠 Tecnologías Utilizadas

### Frontend
- **React 19.0.0** - Biblioteca de interfaz de usuario
- **React Router DOM 7.5.1** - Enrutamiento de páginas
- **Motion 12.23.6** - Animaciones y transiciones
- **Lucide React** - Iconografía moderna
- **Axios** - Cliente HTTP para API calls

### Backend
- **FastAPI** - Framework web Python moderno
- **MongoDB** - Base de datos NoSQL
- **Motor** - Driver async de MongoDB
- **Pydantic** - Validación de datos

### Estilos
- **CSS personalizado** - Diseño moderno con variables CSS
- **Responsive Design** - Adaptable a móviles, tablets y escritorio
- **Animaciones suaves** - Transiciones profesionales

## 📦 Estructura del Proyecto

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Inicio.jsx
│   │   │   ├── SobreNosotros.jsx
│   │   │   ├── Funcionalidades.jsx
│   │   │   └── Contacto.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
└── README.md
```

## 💾 Base de Datos

La aplicación utiliza MongoDB para almacenar:

### Colección: contact_messages
```javascript
{
  id: "uuid",
  nombre: "string",
  email: "string",
  telefono: "string (opcional)",
  empresa: "string (opcional)",
  tipoConsulta: "string",
  mensaje: "string",
  status: "nuevo|procesado|respondido|cerrado",
  created_at: "datetime",
  updated_at: "datetime"
}
```

### Colección: demo_requests
```javascript
{
  id: "uuid",
  email: "string",
  company: "string (opcional)",
  phone: "string (opcional)",
  message: "string (opcional)",
  status: "pending|contacted|demo_scheduled|closed",
  created_at: "datetime",
  updated_at: "datetime"
}
```

## 🚀 Instrucciones de Instalación y Ejecución

### Prerrequisitos
- Node.js 16+ y yarn
- Python 3.8+
- MongoDB (local o remoto)

### Configuración del Entorno

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd zentium-assist
```

2. **Configurar variables de entorno**

Crear archivo `.env` en `/app/backend/` con:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=zentium_assist
```

Crear archivo `.env` en `/app/frontend/` con:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

3. **Instalar dependencias del backend**
```bash
cd app/backend
pip install -r requirements.txt
```

4. **Instalar dependencias del frontend**
```bash
cd app/frontend
yarn install
```

### Ejecución en Desarrollo

1. **Iniciar MongoDB**
```bash
mongod
```

2. **Iniciar el backend**
```bash
cd app/backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

3. **Iniciar el frontend**
```bash
cd app/frontend
yarn start
```

4. **Acceder a la aplicación**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- Documentación API: http://localhost:8001/docs

## 🌐 Despliegue en Producción

### Build para Producción

1. **Generar build del frontend**
```bash
cd app/frontend
yarn build
```

2. **Configurar variables de entorno para producción**
```env
# Backend .env.production
MONGO_URL=mongodb://your-mongodb-host:27017
DB_NAME=zentium_assist_prod

# Frontend .env.production
REACT_APP_BACKEND_URL=https://your-domain.com
```

### Despliegue via FTP

1. **Preparar archivos estáticos**
```bash
# El directorio build/ contiene todos los archivos estáticos
cd app/frontend/build
```

2. **Subir al servidor**
```bash
# Subir contenido de build/ a /public_html/ via FTP
# Configurar servidor web para servir archivos estáticos
```

3. **Configurar backend en servidor**
```bash
# Subir archivos de backend
# Configurar servidor Python (gunicorn, uwsgi)
# Configurar nginx como proxy reverso
```

### Configuración del Servidor Web

**Nginx configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        try_files $uri $uri/ /index.html;
        root /var/www/html;
    }
    
    location /api {
        proxy_pass http://localhost:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 📊 API Endpoints

### Contacto
- `POST /api/contacto` - Crear mensaje de contacto
- `GET /api/contacto` - Obtener todos los mensajes (admin)
- `GET /api/contacto/stats` - Estadísticas de mensajes
- `PUT /api/contacto/{id}/status` - Actualizar estado del mensaje

### Demo Requests
- `POST /api/demo-requests` - Solicitar demo
- `GET /api/demo-requests` - Obtener solicitudes (admin)
- `GET /api/demo-requests/stats` - Estadísticas de solicitudes

## 🎨 Diseño y Tema Visual

### Paleta de Colores
- **Primary**: #2563eb (Azul)
- **Secondary**: #06b6d4 (Celeste)
- **Accent**: #8b5cf6 (Púrpura)
- **Grays**: #f8fafc → #0f172a

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Jerarquía**: 6 niveles de títulos + párrafos
- **Peso**: 300-800

### Características de Diseño
- ✅ Responsive design completo
- ✅ Animaciones suaves con Motion
- ✅ Gradientes sutiles
- ✅ Iconografía coherente (Lucide React)
- ✅ Componentes modernos
- ✅ Microinteracciones

## 🔧 Scripts de Base de Datos

### MongoDB Setup
```javascript
// Crear índices recomendados
db.contact_messages.createIndex({ "email": 1 })
db.contact_messages.createIndex({ "status": 1 })
db.contact_messages.createIndex({ "created_at": -1 })
db.contact_messages.createIndex({ "tipoConsulta": 1 })

db.demo_requests.createIndex({ "email": 1 }, { unique: true })
db.demo_requests.createIndex({ "status": 1 })
db.demo_requests.createIndex({ "created_at": -1 })
```

### Script SQL Equivalente (Para referencia)
```sql
-- Tabla equivalente para contact_messages
CREATE TABLE contact_messages (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    empresa VARCHAR(255),
    tipoConsulta VARCHAR(50) NOT NULL,
    mensaje TEXT NOT NULL,
    status ENUM('nuevo', 'procesado', 'respondido', 'cerrado') DEFAULT 'nuevo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created (created_at),
    INDEX idx_tipo (tipoConsulta)
);
```

## 🧪 Testing

### Funcionalidades Probadas
- ✅ Navegación entre páginas
- ✅ Formulario de contacto funcional
- ✅ Validación de campos
- ✅ Almacenamiento en base de datos
- ✅ Responsive design en diferentes pantallas
- ✅ Animaciones y transiciones

### Testing Manual
1. Verificar navegación en todas las páginas
2. Completar y enviar formulario de contacto
3. Verificar mensajes de éxito/error
4. Probar responsive design
5. Verificar integración backend-frontend

## 📝 Licencia

Este proyecto es propiedad de ZentiumAssist. Todos los derechos reservados.

## 👥 Equipo de Desarrollo

- **Frontend**: React + Motion + CSS moderno
- **Backend**: FastAPI + MongoDB
- **Diseño**: Sistema de diseño personalizado
- **Arquitectura**: Separación frontend/backend

## 🔄 Versiones y Actualizaciones

- **v1.0.0**: Versión inicial completa
- Funcionalidades implementadas: 8/8 módulos
- Páginas completadas: 4/4
- Integración backend: 100% funcional

## 📞 Soporte

Para soporte técnico o consultas sobre implementación:
- Email: soporte@zentiumassist.com
- Documentación API: http://localhost:8001/docs
- Estado del sistema: Todas las funcionalidades operativas

---

*Desarrollado con ❤️ para profesionales de la salud mental*
