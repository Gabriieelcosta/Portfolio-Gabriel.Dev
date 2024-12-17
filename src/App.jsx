import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre/Sobre";
import Projetos from "./Components/Projetos/Projetos";
import Contato from "./Components/Contato/Contato";
import Habilidade from "./Components/Habilidade/Habilidade";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/habilidade" element={<Habilidade/>} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
