import React from 'react';
import printCAD from '../assets/projeto-cad.png'; // Importe o print de CAD
import printDS from '../assets/projeto-ds.png';   // Importe o print de DS

export default function Portfolio() {
  return (
    <main>
      <h2>Meus Projetos</h2>

      <div className="project-card">
        <h3> Vértice</h3>
        <p><strong>Descrição:</strong> Um aplicativo educativo </p>
        <p><strong>Objetivo:</strong> Desenvolver um canal de comunicação e de  apoio que seja acessível, eficaz e atrativo no ecossistema escolar da escolas públicas de Recife</p>
        <p><em>Disciplina: Concepção de artefatos digitais (CAD)</em></p>
        <img src={printCAD} alt="Print do Protótipo CAD" className="project-pic" />
        <div>
          <a href="#" className="btn-link">Ver Repositório GitHub</a>
          <a href="#" className="btn-link" style={{ marginLeft: '10px' }}>Ver Protótipo</a>
        </div>
      </div>

      <div className="project-card">
        <h3>HO-Saúde</h3>
        <p><strong>Descrição:</strong> Sistema de Gestão da Clínica Escola de Ondontologia da UFPE </p>
        <p><strong>Objetivo:</strong> Produzir uma plataforma de gestão e cadastro para otimizar as atividades da clínica</p>
        <p><em>Disciplina: Desenvolvimento de Software (DS)</em></p>
        <img src={printDS} alt="Print do Protótipo DS" className="project-pic" />
        <div>
          <a href="#" className="btn-link">Ver Repositório GitHub</a>
          <a href="#" className="btn-link" style={{ marginLeft: '10px' }}>Ver Protótipo</a>
        </div>
      </div>
    </main>
  );
}