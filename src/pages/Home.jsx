import React from 'react';
import fotoPerfil from '../assets/perfil.jpg'; // Importe sua foto aqui

export default function Home() {
  return (
    <main>
      <h1>Davi Mello| SI - CIn-UFPE</h1>

      <section className="flex-container" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <img src={fotoPerfil} alt="Davi Silva" className="profile-pic" />
        <div>
          <h2>Quem sou eu ??</h2>
          <p>Olá, sou o Davi. Estou cursando o 2º período de Sistemas de Informação no Centro de Informática da UFPE (início 2026).</p>
          <p>Neste momento, sou analista de dados no CITi (Empresa Júnior do CIn) e pesquisador de Aprendizado de máquina quântico no LACIQ, com foco em Computação Quântica.</p>
        </div>
      </section>

      <section>
        <h2>Linguagens de Programação</h2>
        <ul>
          <li>Python (Avançado)</li>
          <li>C++</li>
          <li>Java</li>
          <li>JavaScript (React)</li>
        </ul>
      </section>

      <section>
        <h2>Interesses Acadêmicos e Profissionais</h2>
        <ul>
          <li>Inteligência de Dados</li>
          <li>Inteligência Artificial (Agentic AI, Gen AI)</li>
          <li>Desenvolvimento Software | Web</li>
          <li>Computação Quântica</li>
        </ul>
      </section>

      <section>
        <h2>Informações de Contato</h2>
        <p><strong>Email Faculdade:</strong> <a href="mailto:dsm5@cin.ufpe.br">dsm5@cin.ufpe.br</a></p>
      </section>
    </main>
  );
}