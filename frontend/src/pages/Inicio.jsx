import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  MessageSquare,
  CheckCircle,
  PlayCircle,
  Star,
  Quote
} from "lucide-react";

const Inicio = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Inteligencia Artificial Avanzada",
      description: "Asistente IA que potencia cada consulta con insights basados en evidencia científica."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Seguridad y Privacidad",
      description: "Cumplimiento total con normativas de protección de datos médicos y confidencialidad."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestión Integral",
      description: "Administra profesionales, instituciones y pacientes desde una plataforma unificada."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Análisis y Reportes",
      description: "Genera informes detallados y seguimiento de progreso con visualizaciones intuitivas."
    }
  ];

  const stats = [
    { number: "500+", label: "Profesionales Activos" },
    { number: "15,000+", label: "Pacientes Atendidos" },
    { number: "98%", label: "Satisfacción del Usuario" },
    { number: "24/7", label: "Soporte Disponible" }
  ];

  const testimonials = [
    {
      name: "Dra. María González",
      role: "Psicóloga Clínica",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c78c4b7d?w=100&h=100&fit=crop&crop=face",
      quote: "ZentiumAssist ha transformado completamente mi práctica. La IA me ayuda a identificar patrones que antes pasaba por alto.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Director de Clínica",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "La gestión de nuestra institución nunca fue tan eficiente. El sistema integra todo lo que necesitamos.",
      rating: 5
    },
    {
      name: "Lic. Ana Rodríguez",
      role: "Psicóloga Infantil",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Los tests digitales y el seguimiento automatizado me permiten enfocarme más en lo que realmente importa: mis pacientes.",
      rating: 5
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert(`Suscripción exitosa para: ${email}`);
    setEmail("");
  };

  return (
    <div className="page-inicio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                El Futuro de la
                <span className="hero-title-accent"> Psicología Digital</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ZentiumAssist potencia a los profesionales de la salud mental con 
                inteligencia artificial avanzada, streamlining workflows y mejorando 
                los resultados de tratamiento para todos los pacientes.
              </motion.p>

              <motion.div 
                className="hero-cta"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contacto" className="btn-primary btn-large">
                  <span>Comenzar Prueba Gratuita</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="btn-secondary btn-large">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Ver Demo
                </button>
              </motion.div>

              <motion.div 
                className="hero-social-proof"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="social-proof-text">Confiado por más de 500 profesionales</p>
                <div className="social-proof-avatars">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`avatar avatar-${i}`} />
                  ))}
                  <span className="social-proof-more">+495 más</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <div className="control-dot red"></div>
                    <div className="control-dot yellow"></div>
                    <div className="control-dot green"></div>
                  </div>
                  <div className="mockup-title">ZentiumAssist Dashboard</div>
                </div>
                
                <div className="mockup-content">
                  <div className="mockup-sidebar">
                    <div className="sidebar-item active">
                      <Brain className="w-4 h-4" />
                      <span>IA Assistant</span>
                    </div>
                    <div className="sidebar-item">
                      <Users className="w-4 h-4" />
                      <span>Pacientes</span>
                    </div>
                    <div className="sidebar-item">
                      <BarChart3 className="w-4 h-4" />
                      <span>Reportes</span>
                    </div>
                  </div>
                  
                  <div className="mockup-main">
                    <div className="ai-chat">
                      <div className="chat-message ai">
                        <div className="message-avatar">
                          <Brain className="w-4 h-4" />
                        </div>
                        <div className="message-content">
                          <p>Basado en los síntomas descritos, sugiero evaluar:</p>
                          <ul>
                            <li>Trastorno de ansiedad generalizada</li>
                            <li>Episodio depresivo leve</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mockup-stats">
                      <div className="stat-card">
                        <div className="stat-number">85%</div>
                        <div className="stat-label">Precisión IA</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number">24</div>
                        <div className="stat-label">Pacientes Hoy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Tecnología que Transforma la Práctica Psicológica
            </h2>
            <p className="section-description">
              Descubre cómo ZentiumAssist revoluciona la atención en salud mental 
              con herramientas inteligentes y flujos de trabajo optimizados.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to="/funcionalidades" className="feature-link">
                  Conocer más <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Lo que Dicen Nuestros Profesionales
            </h2>
            <p className="section-description">
              Historias reales de profesionales que han transformado su práctica con ZentiumAssist
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-quote">
                  <Quote className="quote-icon" />
                  <p>{testimonial.quote}</p>
                </div>
                
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              ¿Listo para Revolucionar tu Práctica?
            </h2>
            <p className="cta-description">
              Únete a cientos de profesionales que ya están transformando 
              la atención en salud mental con ZentiumAssist.
            </p>
            
            <div className="cta-actions">
              <Link to="/contacto" className="btn-primary btn-large">
                Solicitar Demo Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/funcionalidades" className="btn-outline btn-large">
                Ver Funcionalidades
              </Link>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Soporte 24/7</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="w-5 h-5" />
                <span>Sin compromisos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="newsletter-text">
              <h3 className="newsletter-title">
                Mantente al día con las últimas innovaciones
              </h3>
              <p className="newsletter-description">
                Recibe actualizaciones sobre nuevas funcionalidades, 
                casos de estudio y mejores prácticas en psicología digital.
              </p>
            </div>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="tu.email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Suscribirse
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;