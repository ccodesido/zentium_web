import React from "react";
import { motion } from "motion/react";
import { 
  Brain, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Heart,
  Shield,
  Zap,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Globe
} from "lucide-react";

const SobreNosotros = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Utilizamos la última tecnología en inteligencia artificial para revolucionar la práctica psicológica."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cuidado Centrado en el Paciente",
      description: "Cada funcionalidad está diseñada para mejorar la experiencia y resultados del tratamiento."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad y Privacidad",
      description: "Protegemos la información sensible con los más altos estándares de seguridad médica."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración Profesional",
      description: "Facilitamos la comunicación y coordinación entre profesionales e instituciones."
    }
  ];

  const team = [
    {
      name: "Dr. Eduardo Silva",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Psicólogo clínico con 15 años de experiencia y especialista en tecnología aplicada a la salud mental."
    },
    {
      name: "Ing. María Rodríguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616c78c4b7d?w=300&h=300&fit=crop&crop=face",
      description: "Ingeniera en sistemas con experiencia en IA y desarrollo de software para el sector salud."
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Director Médico",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Psiquiatra y especialista en transformación digital de instituciones de salud mental."
    },
    {
      name: "Lic. Ana García",
      role: "Directora de UX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Psicóloga especializada en experiencia de usuario y diseño de interfaces para profesionales de la salud."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Fundación de ZentiumAssist",
      description: "Inicio del desarrollo con un equipo de expertos en psicología y tecnología."
    },
    {
      year: "2022",
      title: "Primera Versión Beta",
      description: "Lanzamiento de la versión beta con funcionalidades básicas de gestión clínica."
    },
    {
      year: "2023",
      title: "Integración de IA",
      description: "Incorporación del asistente de inteligencia artificial para diagnósticos y análisis."
    },
    {
      year: "2024",
      title: "500+ Profesionales",
      description: "Alcanzamos más de 500 profesionales activos utilizando nuestra plataforma."
    }
  ];

  const aiFeatures = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Análisis de Patrones",
      description: "Identifica patrones en el comportamiento y síntomas del paciente."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predicción de Resultados",
      description: "Predice la efectividad de diferentes enfoques terapéuticos."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Asistencia en Diagnósticos",
      description: "Sugiere diagnósticos diferenciales basados en evidencia científica."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Recomendaciones Personalizadas",
      description: "Genera recomendaciones de tratamiento adaptadas a cada caso."
    }
  ];

  return (
    <div className="page-sobre-nosotros">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">
              Transformando la 
              <span className="text-gradient"> Salud Mental</span> 
              con Inteligencia Artificial
            </h1>
            <p className="about-hero-description">
              En ZentiumAssist creemos que la tecnología puede potenciar la labor de los profesionales 
              de la salud mental, mejorando tanto la eficiencia de los procesos como la calidad 
              de atención que reciben los pacientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Nuestra Misión</h2>
              <p className="mission-description">
                Democratizar el acceso a herramientas avanzadas de inteligencia artificial 
                para profesionales de la psicología, permitiéndoles brindar una atención 
                más precisa, eficiente y personalizada a sus pacientes.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Mejorar la precisión en diagnósticos</span>
                </div>
                <div className="mission-point">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Optimizar los tiempos de consulta</span>
                </div>
                <div className="mission-point">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Facilitar el seguimiento de tratamientos</span>
                </div>
                <div className="mission-point">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Potenciar la colaboración entre profesionales</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mission-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mission-card">
                <div className="card-header">
                  <Target className="w-8 h-8 text-primary" />
                  <h3>Visión 2025</h3>
                </div>
                <p>
                  Ser la plataforma líder en América Latina para la gestión 
                  inteligente de consultorios y clínicas de salud mental, 
                  impactando positivamente la vida de más de 100,000 pacientes.
                </p>
                <div className="vision-metrics">
                  <div className="metric">
                    <span className="metric-number">1,000+</span>
                    <span className="metric-label">Profesionales</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">50+</span>
                    <span className="metric-label">Instituciones</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">10</span>
                    <span className="metric-label">Países</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">El Poder de la Inteligencia Artificial</h2>
            <p className="section-description">
              Nuestro asistente de IA está entrenado con miles de casos clínicos y 
              literatura científica actualizada, proporcionando insights valiosos 
              para cada consulta.
            </p>
          </motion.div>

          <div className="ai-features-grid">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="ai-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="ai-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="ai-feature-title">{feature.title}</h3>
                <p className="ai-feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="ai-showcase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="ai-showcase-content">
              <div className="ai-showcase-text">
                <h3>Asistente IA en Acción</h3>
                <p>
                  Nuestro asistente analiza la información del paciente en tiempo real, 
                  sugerencias diagnósticas, planes de tratamiento y alertas importantes 
                  basadas en evidencia científica actualizada.
                </p>
                <div className="ai-stats">
                  <div className="ai-stat">
                    <span className="ai-stat-number">95%</span>
                    <span className="ai-stat-label">Precisión diagnóstica</span>
                  </div>
                  <div className="ai-stat">
                    <span className="ai-stat-number">40%</span>
                    <span className="ai-stat-label">Reducción de tiempo</span>
                  </div>
                  <div className="ai-stat">
                    <span className="ai-stat-number">24/7</span>
                    <span className="ai-stat-label">Disponibilidad</span>
                  </div>
                </div>
              </div>
              <div className="ai-demo">
                <div className="ai-demo-header">
                  <div className="demo-title">ZentiumAssist IA</div>
                  <div className="demo-status">
                    <Zap className="w-4 h-4" />
                    <span>Analizando...</span>
                  </div>
                </div>
                <div className="ai-conversation">
                  <div className="ai-message">
                    <Brain className="w-6 h-6" />
                    <div className="message-content">
                      <p><strong>Análisis completado:</strong></p>
                      <p>Basado en los síntomas reportados (ansiedad, insomnio, dificultad de concentración), sugiero evaluar:</p>
                      <ul>
                        <li>Trastorno de ansiedad generalizada (GAD-7: 12/21)</li>
                        <li>Episodio depresivo leve (PHQ-9: 8/27)</li>
                      </ul>
                      <p><strong>Recomendación:</strong> Considerar terapia cognitivo-conductual combinada con técnicas de mindfulness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-description">
              Los principios que guían cada decisión y desarrollo en ZentiumAssist
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="section-description">
              Profesionales apasionados por la innovación en salud mental
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestro Camino</h2>
            <p className="section-description">
              La evolución de ZentiumAssist desde sus inicios hasta hoy
            </p>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;