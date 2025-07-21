import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  Building,
  Calendar,
  Zap,
  Loader2
} from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoConsulta: "informacion",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hola@zentiumassist.com",
      action: "mailto:hola@zentiumassist.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+54 11 1234-5678",
      action: "tel:+541112345678"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "Buenos Aires, Argentina",
      action: "#mapa"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      content: "Lun - Vie: 9:00 - 18:00",
      action: null
    }
  ];

  const consultaTypes = [
    { value: "informacion", label: "Información general" },
    { value: "demo", label: "Solicitar demostración" },
    { value: "soporte", label: "Soporte técnico" },
    { value: "ventas", label: "Consulta comercial" },
    { value: "integracion", label: "Integración con sistemas" },
    { value: "capacitacion", label: "Capacitación y entrenamiento" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await axios.post(`${API}/contacto`, formData);
      
      setSubmissionStatus('success');
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        tipoConsulta: "informacion",
        mensaje: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmissionStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-contacto">
      {/* Hero Section */}
      <section className="contacto-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Conecta con 
              <span className="text-gradient"> Nuestro Equipo</span>
            </h1>
            <p className="hero-description">
              ¿Tienes preguntas sobre ZentiumAssist? Nuestro equipo de expertos 
              está aquí para ayudarte a encontrar la mejor solución para tu práctica profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h2 className="form-title">Envíanos tu Consulta</h2>
                <p className="form-description">
                  Completa el formulario y te responderemos en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      <User className="w-4 h-4" />
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={isSubmitting}
                      placeholder="Dr. Juan Pérez"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <Mail className="w-4 h-4" />
                      Email profesional *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={isSubmitting}
                      placeholder="juan.perez@clinica.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={isSubmitting}
                      placeholder="+54 11 1234-5678"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa" className="form-label">
                      <Building className="w-4 h-4" />
                      Institución/Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={isSubmitting}
                      placeholder="Clínica Santa María"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tipoConsulta" className="form-label">
                    <MessageSquare className="w-4 h-4" />
                    Tipo de consulta *
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                    disabled={isSubmitting}
                  >
                    {consultaTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    <MessageSquare className="w-4 h-4" />
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    required
                    disabled={isSubmitting}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submissionStatus === 'success' && (
                  <motion.div
                    className="status-message success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </motion.div>
                )}

                {submissionStatus === 'error' && (
                  <motion.div
                    className="status-message error"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Error al enviar el mensaje. Por favor intenta nuevamente.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h3 className="info-title">Información de Contacto</h3>
                <p className="info-description">
                  Múltiples formas de conectar con nuestro equipo especializado
                </p>

                <div className="contact-items">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="contact-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="item-icon">
                        {item.icon}
                      </div>
                      <div className="item-content">
                        <h4 className="item-title">{item.title}</h4>
                        {item.action ? (
                          <a href={item.action} className="item-link">
                            {item.content}
                          </a>
                        ) : (
                          <span className="item-text">{item.content}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <h4 className="actions-title">Acciones Rápidas</h4>
                  <div className="actions-grid">
                    <motion.button 
                      className="action-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Demo</span>
                    </motion.button>
                    <motion.button 
                      className="action-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="w-5 h-5" />
                      <span>Prueba Gratuita</span>
                    </motion.button>
                  </div>
                </div>

                {/* Response Time */}
                <div className="response-info">
                  <div className="response-item">
                    <CheckCircle className="w-5 h-5" />
                    <span>Respuesta en menos de 24hs</span>
                  </div>
                  <div className="response-item">
                    <CheckCircle className="w-5 h-5" />
                    <span>Soporte en español</span>
                  </div>
                  <div className="response-item">
                    <CheckCircle className="w-5 h-5" />
                    <span>Especialistas disponibles</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="map-section">
        <div className="container">
          <motion.div 
            className="map-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestra Ubicación</h2>
            <p className="section-description">
              Visitanos en nuestras oficinas en Buenos Aires
            </p>
          </motion.div>

          <motion.div 
            className="map-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.32436873724!2d-58.4519!3d-34.6118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1709123456789!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ZentiumAssist"
            />
          </motion.div>

          <div className="map-info">
            <div className="info-card">
              <MapPin className="w-6 h-6" />
              <div>
                <h4>Dirección Completa</h4>
                <p>Av. Corrientes 1234, Piso 5<br />Buenos Aires, Argentina (C1043AAZ)</p>
              </div>
            </div>
            <div className="info-card">
              <Clock className="w-6 h-6" />
              <div>
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Antes de Contactarnos</h2>
            <p className="section-description">
              Revisa estas respuestas rápidas a consultas frecuentes
            </p>
          </motion.div>

          <div className="faq-quick">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>¿Ofrecen demo gratuita?</h4>
              <p>Sí, ofrecemos demos personalizadas de 30 minutos sin costo.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>¿Cuánto tiempo toma la implementación?</h4>
              <p>La implementación básica toma entre 1-2 semanas con nuestro soporte.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>¿Incluyen capacitación?</h4>
              <p>Sí, incluimos capacitación completa y soporte durante el primer mes.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;