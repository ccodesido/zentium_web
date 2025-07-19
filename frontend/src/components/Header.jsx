import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Funcionalidades", path: "/funcionalidades" },
    { name: "Contacto", path: "/contacto" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <motion.div 
              className="logo-icon"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Brain className="w-8 h-8" />
            </motion.div>
            <div className="logo-text">
              <span className="logo-primary">Zentium</span>
              <span className="logo-secondary">Assist</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contacto" 
              className="btn-primary nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Demo
            </Link>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;