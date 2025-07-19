import React from "react";
import { motion } from "motion/react";
import { 
  Calendar, 
  Users, 
  Brain, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  Menu,
  X,
  Loader2
} from "lucide-react";
import { useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

  const springConfig = {
    type: "spring",
    damping: 80,
    stiffness: 400,
    mass: 1
  };

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Patient Records",
      description: "Secure, comprehensive digital patient files with complete treatment history and progress notes."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Assisted Diagnostics",
      description: "Advanced AI algorithms support clinical decision-making with pattern recognition and insights."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Appointment Scheduling",
      description: "Intelligent scheduling system with automated reminders and calendar integration."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Progress Tracking",
      description: "Visual progress monitoring with data-driven insights and treatment outcome analysis."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring patient data protection"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 3+ Hours Daily",
      description: "Streamlined workflows reduce administrative burden"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Improved Outcomes",
      description: "AI insights lead to better treatment decisions"
    }
  ];

  const handleDemoRequest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      const response = await axios.post(`${API}/demo-requests`, {
        email: email
      });
      
      // Show success message
      setSubmissionStatus('success');
      setEmail("");
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Demo request failed:', error);
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
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2 className="logo-text">Zentium Assist</h2>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#features" className="nav-link">Features</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary btn-small">Request Demo</button>
            </nav>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section gradient-hero">
        <div className="gradient-overlay">
          <div className="container">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.2 }}
                className="hero-text"
              >
                <h1 className="display-hero">
                  AI-Powered Clinical Management for Psychology Professionals
                </h1>
                <p className="body-large hero-description">
                  Streamline patient care with intelligent record management, 
                  AI-assisted diagnostics, and comprehensive progress tracking. 
                  Transform your practice with Zentium Assist.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springConfig, delay: 0.4 }}
                  className="hero-cta"
                >
                  <form onSubmit={handleDemoRequest} className="form-with-button">
                    <input
                      type="email"
                      placeholder="Enter your professional email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      required
                    />
                    <button type="submit" className="form-submit-embedded">
                      Request Demo
                    </button>
                  </form>
                  <p className="body-small hero-subtitle">
                    Join 500+ psychology professionals already using Zentium Assist
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...springConfig, delay: 0.6 }}
                className="hero-visual"
              >
                <div className="dashboard-preview">
                  <div className="dashboard-header">
                    <div className="dashboard-title">Patient Dashboard</div>
                    <div className="dashboard-status">AI Analysis: Complete</div>
                  </div>
                  <div className="dashboard-content">
                    <div className="patient-card">
                      <div className="patient-info">
                        <div className="patient-name">Sarah Johnson</div>
                        <div className="patient-meta">Last session: 2 days ago</div>
                      </div>
                      <div className="progress-indicator">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '75%'}}></div>
                        </div>
                        <span className="progress-text">75% Progress</span>
                      </div>
                    </div>
                    <div className="ai-insights">
                      <div className="insight-badge">AI Insight</div>
                      <div className="insight-text">Positive response to CBT techniques</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springConfig}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="heading-large">Comprehensive Clinical Management Platform</h2>
            <p className="body-large section-description">
              Everything you need to deliver exceptional patient care in one integrated platform
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card hover-lift"
              >
                <div className="feature-icon" style={{ color: 'var(--brand-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="heading-medium">{feature.title}</h3>
                <p className="body-standard">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springConfig}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="heading-large">Why Psychology Professionals Choose Zentium Assist</h2>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="benefit-item"
              >
                <div className="benefit-icon" style={{ color: 'var(--brand-primary)' }}>
                  {benefit.icon}
                </div>
                <div className="benefit-content">
                  <h3 className="heading-medium">{benefit.title}</h3>
                  <p className="body-standard">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section gradient-waitlist">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springConfig}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2 className="heading-large">Ready to Transform Your Practice?</h2>
            <p className="body-large">
              Join hundreds of psychology professionals using AI to deliver better patient outcomes
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Request Demo</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="heading-medium">Zentium Assist</h3>
              <p className="body-standard">
                Empowering psychology professionals with AI-driven clinical management solutions.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Product</h4>
                <a href="#" className="footer-link">Features</a>
                <a href="#" className="footer-link">Pricing</a>
                <a href="#" className="footer-link">Security</a>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Support</h4>
                <a href="#" className="footer-link">Documentation</a>
                <a href="#" className="footer-link">Help Center</a>
                <a href="#" className="footer-link">Contact</a>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Company</h4>
                <a href="#" className="footer-link">About</a>
                <a href="#" className="footer-link">Privacy</a>
                <a href="#" className="footer-link">Terms</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="body-small">
              © 2025 Zentium Assist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;