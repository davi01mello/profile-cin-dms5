// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/~dsm5">
      <header>
        <div className="container navbar">
          <Link to="/" className="logo">Davi de Souza Mello</Link>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
          </ul>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2026 Davi de Souza Mello - CIn UFPE. SPA desenvolvida em React + Vite.</p>
          <p>Dúvidas? <a href="mailto:dsm5@cin.ufpe.br">Entre em contato</a></p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;