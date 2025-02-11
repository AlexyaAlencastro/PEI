import React, { useState } from "react";
import "./cabecalho.css";
import LogoSP from "../imagens/LOGO SEDUC.png";
import logoCronogramaDeEnsino from "../imagens/LOGO MENINO PEI.png";
import logoBrasilia from "../imagens/logoBrasilia.png";

const menuItems = [
  "HOME",
  "PEI",
  "BIBLIOTECA",
  "GUIAS",
  "AGENDA",
  "PROJETOS",
  "GRÊMIO",
  "LOCALIZAÇÃO",
];

const peiSubItems = [
  "O Programa (PEI)",
  "Documentos Norteadores do PEI",
  "A Escola",
  "PECS (Professor Especialista Em Currículo) Brasília",
  "Equipe",
  "MMR",
  "Coordenação Geral",
];

const bibliotecaSubItems = [
  "Sistema Apostilado 6° Ano",
  "Sistema Apostilado 7° Ano",
  "Sistema Apostilado 8° Ano",
  "Sistema Apostilado 9° Ano",
];

const guiasSubItems = [
  "Guia de Aprendizagem 1° Bimestre",
  "Guia de Aprendizagem 2° Bimestre",
  "Guia de Aprendizagem 3° Bimestre",
  "Guia de Aprendizagem 4° Bimestre",
];

const projetosSubItems = ["Passeios Culturais", "OMASP", "REDASP", "GINGABRÁS"];

function Cabecalho() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Função para lidar com o mouse entrando e saindo nos itens do menu
  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <header className="header">
      <div className="container">
        {/* Logo Esquerda */}
        <div className="logo-container">
          <img src={logoBrasilia} alt="Logo Esquerda" className="logo-left" />
          <span className="school-name">
            EE PEI Dª Brasília Castanho <br /> de Oliveira Dona
          </span>
        </div>

        {/* Espaço entre os elementos */}
        <div className="flex-1"></div>

        {/* Logos Direita (Alinhadas lado a lado) */}
        <div className="logos-right">
          <img
            src={logoCronogramaDeEnsino}
            alt="Logo Direita 2"
            className="logoMenino"
          />
          <img src={LogoSP} alt="Logo Direita 1" className="logoSeduc" />
        </div>
      </div>

      {/* Barra de navegação */}
      <nav className="navbar">
        <div className="container">
          <ul>
            {menuItems.map((item, index) => {
              let subItems = [];
              if (item === "PEI") subItems = peiSubItems;
              if (item === "BIBLIOTECA") subItems = bibliotecaSubItems;
              if (item === "GUIAS") subItems = guiasSubItems;
              if (item === "PROJETOS") subItems = projetosSubItems;

              return (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                  {hoveredItem === item && subItems.length > 0 && (
                    <ul className="dropdown">
                      {subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;
