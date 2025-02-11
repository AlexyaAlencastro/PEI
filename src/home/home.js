import React, { useState, useEffect } from "react";
import "./home.css";
import salaAula from "../imagens/salaAula.jpg";
import livros from "../imagens/livros.jpg";
import site1 from "../imagens/salaAula.jpg";
import site2 from "../imagens/salaAula.jpg";
import site3 from "../imagens/salaAula.jpg";
import site4 from "../imagens/salaAula.jpg";
import imagemEscola from "../imagens/imagemEscola.jpeg";
import imagemEscola1 from "../imagens/imagemEscola1.jpeg";
import imagemEscola2 from "../imagens/imagemEscola2.jpeg";
import imagemEscola3 from "../imagens/imagemEscola3.jpeg";
import imagemEscola4 from "../imagens/imagemEscola4.jpeg";
import imagemEscola5 from "../imagens/imagemEscola5.jpeg";
import imagemEscola6 from "../imagens/imagemEscola6.jpeg";

const Home = () => {
  const images = [
    imagemEscola,
    imagemEscola1,
    imagemEscola2,
    imagemEscola3,
    imagemEscola4,
    imagemEscola5,
    imagemEscola6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel">
          <button className="prev-button" onClick={prevImage}>
            &#10094;
          </button>

          <div className="carousel-images">
            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>

          <button className="next-button" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      </div>

      {/* 4 cards pequenos com links para sites externos */}
      <div className="external-links-container">
        <a
          href="https://www.exemplo1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="external-card">
            <img src={site1} alt="Site 1" className="external-card-image" />
          </div>
        </a>
        <a
          href="https://www.exemplo2.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="external-card">
            <img src={site2} alt="Site 2" className="external-card-image" />
          </div>
        </a>
        <a
          href="https://www.exemplo3.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="external-card">
            <img src={site3} alt="Site 3" className="external-card-image" />
          </div>
        </a>
        <a
          href="https://www.exemplo4.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="external-card">
            <img src={site4} alt="Site 4" className="external-card-image" />
          </div>
        </a>
      </div>

      {/* Título das Últimas Notícias */}
      <h2 className="news-title">Últimas Notícias</h2>

      {/* Cards abaixo do Carrossel */}
      <div className="cards-container">
        <div className="card">
          <img src={salaAula} alt="Notícia 1" className="card-image" />
          <div className="card-content">
            <h3>Retorno às Aulas</h3>
            <p>
              A escola está pronta para o retorno das aulas presenciais na
              próxima semana.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={livros} alt="Notícia 2" className="card-image" />
          <div className="card-content">
            <h3>Doação de Livros</h3>
            <p>
              Estamos recebendo doações de livros para a biblioteca da escola.
              Participe!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={salaAula} alt="Notícia 3" className="card-image" />
          <div className="card-content">
            <h3>Novos Laboratórios</h3>
            <p>
              Os novos laboratórios de ciências e informática serão inaugurados
              este mês.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={livros} alt="Notícia 4" className="card-image" />
          <div className="card-content">
            <h3>Festival Cultural</h3>
            <p>
              O Festival Cultural será realizado no próximo final de semana. Não
              perca!
            </p>
          </div>
        </div>
      </div>

      <div className="social-and-cards-container">
        {/* Container do Facebook */}
        <div className="facebook-container">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrasiliacastanhodeoliveira&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=694933416117313"
            width="340"
            height="331"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        {/* Container dos Cards */}
        <div className="small-cards-container">
          {/* Cards pequenos */}
          {[...Array(8)].map((_, index) => (
            <div className="small-card" key={index}>
              <img
                src="https://via.placeholder.com/150"
                alt={`Card ${index + 1}`}
                className="small-card-image"
              />
              <div className="small-card-content">
                <h3>Card {index + 1}</h3>
                <p>Descrição do card {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
