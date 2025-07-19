import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import SobreNosotros from "./pages/SobreNosotros";
import Funcionalidades from "./pages/Funcionalidades";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/funcionalidades" element={<Funcionalidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;