//import { useState } from "react";


export default function Hero(){
    return (
        <section className= "Hero" id= "nome">
            <div className="container hero-grid">
                <div>
                    <div className="kicker fade-up">Desenvolvedor FullStack</div>
                    <h1 className="fade-up d2">
                         Node.js e React para soluções rápidas e escaláveis.
                    </h1>

                    <p className= "fade-up d3">
                      Desenvolvedor de Software | Back-End | Automação de Processos

                       <p> Sou estudante de Ciência da Computação (8º período) na UNIFAL-MG, apaixonado por criar soluções eficientes que geram impacto real. 
                      Tenho experiência prática no desenvolvimento de sistemas, automação e integrações com APIs, 
                      sempre buscando otimizar processos e melhorar a performance das soluções.
                      O que já desenvolvi:</p>
                      <ul>
                         <li>Migração de dados e multimídia entre plataformas, utilizando JavaScript, PHP e Node.js.</li>
                         <li>Integração com APIs REST para automação de downloads, uploads, estruturação de diretórios e controle de progresso.</li>
                         <li>Criação de sistemas de cache para otimização de execução e economia de recursos.</li>
                         <li>Geração de relatórios dinâmicos e gráficos automatizados via Google Sheets e QuickChart.</li>
                         <li>Manutenção e suporte de infraestrutura de TI, com foco em disponibilidade e segurança.</li>
                      </ul>
                        <p>Atualmente, estou aprofundando meus conhecimentos com o CS50 (Harvard) e bootcamps de desenvolvimento
                      web e Python. Meu objetivo é me tornar referência na criação de soluções escaláveis e de alto impacto, 
                      combinando tecnologia e inovação.</p>
                    </p>

                    <div className="btn-row fade-up d3">
                        <a href="#projects" className="btn primary"> Ver projetos </a>
                        <a href="#contacts" className="btn"> Entrar em contato</a>
                    </div>
                </div>

                <div className=" hero-thumb fade-up d4" />

            </div>
        </section>
    )
}