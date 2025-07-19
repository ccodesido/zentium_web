import React from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Producto",
      links: [
        { name: "Funcionalidades", path: "/funcionalidades" },
        { name: "Sobre Nosotros", path: "/sobre-nosotros" },
        { name: "Demo", path: "/contacto" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Documentación", path: "#" },
        { name: "Centro de Ayuda", path: "#" },
        { name: "Contacto", path: "/contacto" },
        { name: "FAQ", path: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Acerca de", path: "/sobre-nosotros" },
        { name: "Privacidad", path: "#" },
        { name: "Términos", path: "#" },
        { name: "Seguridad", path: "#" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-icon">
                <Brain className="w-8 h-8" />
              </div>
              <div className="logo-text">
                <span className="logo-primary">Zentium</span>
                <span className="logo-secondary">Assist</span>
              </div>
            </motion.div>
            
            <p className="footer-description">
              Empoderar a los profesionales de psicología con tecnología de IA 
              para brindar una atención excepcional a los pacientes.
            </p>
            
            <div className="footer-contact">
              <div className="contact-item">
                <Mail className="w-4 h-4" />
                <span>info@zentiumassist.com</span>
              </div>
              <div className="contact-item">
                <Phone className="w-4 h-4" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="contact-item">
                <MapPin className="w-4 h-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <div key={section.title} className="footer-section">
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} ZentiumAssist. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <Link to="#" className="footer-bottom-link">Privacidad</Link>
              <Link to="#" className="footer-bottom-link">Términos</Link>
              <Link to="#" className="footer-bottom-link">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;