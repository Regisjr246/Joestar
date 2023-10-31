import './App.module.css';
import axios from 'axios';

import React from "react";


const paginaInicial = () => {
  <body>
    <header className="header">
      <a href="" className="logo">JOESTAR </a>

      <div className="social">
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-telegram"></i></a>
      </div>

      <nav className="navbar">
        <a href="#">Produtos</a>
        <a href="#">Servicos</a>
        <a href="#">Localização</a>
        <a href="#">Contatos</a>
      </nav>
    </header>

    <section className="banner">
      <div className="slider">
        <div className="slide active">
          <img
            src="../images/O-que-Preciso-para-Iniciar-na-Profissão-1-1024x576.jpg"
            alt=""
          />
          <div className="left-info">
            <div className="penetrte-blur">
              <h6>JOE</h6>
            </div>
            <div className="content">
              <h3>JOESTAR</h3>
              <p>
                JOESTAR barbearia moderna localizada na avenida guanabar, rua
                almirante 13 46, com intuito de deixar sua aperencia um brilho
              </p>
              <a href="#" className="btn">Detalhes</a>
            </div>
          </div>
          </div>
          <div className="right-info">
            <div className="penetrte-blur">
              <h6>STAR</h6>
            </div>
          </div>
        </div>

        <div className="slide">
          <img src="../images/Barbearia post instagram.png" alt="" />
          <div className="left-info">
            <div className="penetrte-blur">
              <h6>Cortes</h6>
            </div>
            <div className="content">
              <a href="#" className="btn">Agendar</a>
            </div>
          </div>
        </div>

       

      <div className="navigation">
        <span className="prev-btn"
          ><i className="fa-solid fa-chevron-left fa-3x"></i
        ></span>
        <span className="next-btn"
          ><i className="fa-solid fa-chevron-right fa-3x"></i
        ></span>
      </div>
    </section>
  </body>
 }
  export default paginaInicial;