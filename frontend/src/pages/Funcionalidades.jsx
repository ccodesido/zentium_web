import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Building, 
  FileText, 
  Brain, 
  ClipboardList, 
  BarChart3,
  MessageSquare,
  Shield,
  Calendar,
  Search,
  Zap,
  ChevronRight,
  ChevronDown,
  Play,
  CheckCircle,
  Monitor,
  Smartphone,
  Clock,
  Database,
  Lock,
  Wifi
} from "lucide-react";

const Funcionalidades = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const mainFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Profesionales e Instituciones",
      description: "Sistema completo para administrar perfiles, roles, permisos y colaboración entre profesionales.",
      details: [
        "Perfiles personalizados para cada profesional",
        "Gestión de roles y permisos granulares",
        "Coordinación entre equipos multidisciplinarios",
        "Dashboard administrativo para instituciones",
        "Integración con sistemas existentes"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      demo: "Crear perfil profesional en 30 segundos"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Historia Clínica Digital",
      description: "Registro seguro y completo de la información clínica con acceso instantáneo y búsquedas inteligentes.",
      details: [
        "Historias clínicas completamente digitales",
        "Búsqueda avanzada por síntomas o diagnósticos",
        "Adjuntos multimedia (audio, imágenes, documentos)",
        "Control de versiones y auditoría completa",
        "Exportación en formatos estándar"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      demo: "Ver ejemplo de historia clínica"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Asistente Integral IA para Entrevistas",
      description: "Inteligencia artificial que guía y optimiza el proceso de entrevista clínica en tiempo real.",
      details: [
        "Sugerencias de preguntas durante la entrevista",
        "Análisis en tiempo real del discurso del paciente",
        "Identificación de patrones y señales de alerta",
        "Transcripción automática con análisis semántico",
        "Recomendaciones basadas en evidencia científica"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      demo: "Probar asistente IA"
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Tests Psicológicos y Cuestionarios",
      description: "Biblioteca completa de instrumentos de evaluación con corrección automática y análisis estadístico.",
      details: [
        "Más de 50 tests psicológicos validados",
        "Corrección y puntuación automática",
        "Generación de perfiles psicológicos",
        "Comparación con baremos poblacionales",
        "Seguimiento longitudinal de resultados"
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      demo: "Explorar biblioteca de tests"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Diagnóstico y Generación de Informes",
      description: "Herramientas avanzadas para formulación diagnóstica y creación automática de informes profesionales.",
      details: [
        "Asistencia en diagnóstico diferencial",
        "Generación automática de informes",
        "Templates personalizables por especialidad",
        "Integración con criterios DSM-5 y CIE-11",
        "Firma digital y validación legal"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      demo: "Generar informe de ejemplo"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Asignación y Seguimiento de Tareas",
      description: "Sistema de gestión de tratamientos con seguimiento automático y alertas inteligentes.",
      details: [
        "Planes de tratamiento personalizados",
        "Asignación de tareas terapéuticas",
        "Recordatorios automáticos para pacientes",
        "Seguimiento de adherencia al tratamiento",
        "Métricas de progreso en tiempo real"
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      demo: "Ver panel de seguimiento"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Métodos de Abordaje y Entrenamiento Mental",
      description: "Recursos y técnicas terapéuticas con guías interactivas y ejercicios personalizados.",
      details: [
        "Biblioteca de técnicas terapéuticas",
        "Ejercicios de mindfulness y relajación",
        "Programas de entrenamiento cognitivo",
        "Recursos multimedia interactivos",
        "Seguimiento de prácticas diarias"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      demo: "Explorar técnicas disponibles"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatbot para Consultas Urgentes",
      description: "Asistente virtual disponible 24/7 para consultas de emergencia y comunicación con profesionales.",
      details: [
        "Disponibilidad 24/7 para emergencias",
        "Escalamiento automático a profesionales",
        "Protocolos de crisis predefinidos",
        "Historial completo de interacciones",
        "Integración con servicios de emergencia"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      demo: "Probar chatbot de emergencia"
    }
  ];

  const technicalSpecs = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Multiplataforma",
      description: "Web, móvil y tablet"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Médica",
      description: "Cumplimiento HIPAA"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backup Automático",
      description: "Copias cada 15 minutos"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Modo Offline",
      description: "Funciona sin internet"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encriptación",
      description: "AES-256 end-to-end"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tiempo Real",
      description: "Sincronización instantánea"
    }
  ];

  const integrations = [
    { name: "Google Calendar", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecalendar.svg" },
    { name: "Microsoft Teams", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg" },
    { name: "Zoom", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg" },
    { name: "WhatsApp Business", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" },
    { name: "Slack", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg" },
    { name: "Dropbox", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg" }
  ];

  const faqs = [
    {
      question: "¿Qué tan segura es la información de mis pacientes?",
      answer: "Utilizamos encriptación AES-256 de extremo a extremo, cumplimos con normativas HIPAA y realizamos auditorías de seguridad trimestrales. Todos los datos se almacenan en servidores certificados con backup automático."
    },
    {
      question: "¿Puedo personalizar los informes según mi especialidad?",
      answer: "Sí, ofrecemos templates completamente personalizables para diferentes especialidades: psicología clínica, infantil, organizacional, forense, etc. También puedes crear tus propios templates."
    },
    {
      question: "¿Cómo funciona la IA en las entrevistas?",
      answer: "Nuestro asistente de IA analiza en tiempo real las respuestas del paciente, sugiere preguntas de seguimiento, identifica patrones relevantes y proporciona insights basados en evidencia científica actualizada."
    },
    {
      question: "¿Qué sucede si pierdo conexión a internet?",
      answer: "ZentiumAssist funciona en modo offline. Puedes continuar trabajando normalmente y todos los cambios se sincronizarán automáticamente cuando recuperes la conexión."
    },
    {
      question: "¿Ofrecen capacitación para usar el sistema?",
      answer: "Sí, incluimos capacitación completa: onboarding personalizado, webinars semanales, documentación detallada y soporte técnico 24/7 durante los primeros 30 días."
    }
  ];

  return (
    <div className="page-funcionalidades">
      {/* Hero Section */}
      <section className="funcionalidades-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Funcionalidades 
              <span className="text-gradient"> Completas</span>
            </h1>
            <p className="hero-description">
              Descubre todas las herramientas que ZentiumAssist pone a tu disposición 
              para revolucionar tu práctica profesional en salud mental.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Módulos principales</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Tests disponibles</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Soporte IA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Funcionalidades Principales</h2>
            <p className="section-description">
              Cada módulo está diseñado para optimizar aspectos específicos de tu práctica profesional
            </p>
          </motion.div>

          <div className="features-showcase">
            <div className="features-nav">
              {mainFeatures.map((feature, index) => (
                <motion.button
                  key={feature.title}
                  className={`feature-nav-item ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="nav-icon">
                    {feature.icon}
                  </div>
                  <div className="nav-content">
                    <h3 className="nav-title">{feature.title}</h3>
                    <p className="nav-description">{feature.description}</p>
                  </div>
                  <ChevronRight className="nav-arrow" />
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="feature-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="feature-image">
                  <img 
                    src={mainFeatures[activeFeature].image} 
                    alt={mainFeatures[activeFeature].title}
                  />
                  <div className="image-overlay">
                    <button className="play-demo">
                      <Play className="w-6 h-6" />
                      <span>{mainFeatures[activeFeature].demo}</span>
                    </button>
                  </div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">
                    {mainFeatures[activeFeature].title}
                  </h3>
                  <p className="feature-description">
                    {mainFeatures[activeFeature].description}
                  </p>
                  
                  <ul className="feature-details">
                    {mainFeatures[activeFeature].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="technical-specs">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Especificaciones Técnicas</h2>
            <p className="section-description">
              Tecnología robusta y confiable para el uso profesional diario
            </p>
          </motion.div>

          <div className="specs-grid">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.title}
                className="spec-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="spec-icon">
                  {spec.icon}
                </div>
                <h3 className="spec-title">{spec.title}</h3>
                <p className="spec-description">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Integraciones Disponibles</h2>
            <p className="section-description">
              Conecta ZentiumAssist con las herramientas que ya utilizas
            </p>
          </motion.div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className="integration-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="integration-logo"
                />
                <span className="integration-name">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-description">
              Respuestas a las consultas más comunes sobre nuestras funcionalidades
            </p>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className={`faq-question ${expandedFaq === index ? 'expanded' : ''}`}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`faq-arrow ${expandedFaq === index ? 'rotated' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="funcionalidades-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              ¿Listo para Experimentar Todas las Funcionalidades?
            </h2>
            <p className="cta-description">
              Solicita una demostración personalizada y descubre cómo ZentiumAssist 
              puede transformar tu práctica profesional.
            </p>
            <div className="cta-actions">
              <button className="btn-primary btn-large">
                <Zap className="w-5 h-5 mr-2" />
                Solicitar Demo Personalizada
              </button>
              <button className="btn-outline btn-large">
                Hablar con un Especialista
              </button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Demo gratuita de 30 minutos</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Configuración personalizada</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Soporte durante la implementación</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Funcionalidades;