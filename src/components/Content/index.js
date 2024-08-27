import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import styles from "./Content.module.css"; // Importa o módulo CSS para a página de conteúdo

// Importa as imagens
import car1 from "./../../assets/img/carro01.webp";
import car2 from "./../../assets/img/carro02.webp";
import car3 from "./../../assets/img/carro03.webp";
import car4 from "./../../assets/img/carro04.webp";
import car5 from "./../../assets/img/carro05.webp";

function Content() {
  const navigate = useNavigate();

  function handleNavigateToCarList() {
    navigate("/carlist");
  }

  return (
    <div>
      {/* Seção de introdução */}
      <div className={styles.introSection}>
        <div className={styles.introText}>
          <h1>Bem-vindo à Garagem Hot Wheels!</h1>
          <p>
            🚗💨 <strong>Acelere para a Diversão!</strong>
          </p>
        </div>
      </div>

      {/* Seção de botões com carrossel */}
      <div className={styles.acessoGaragem}>
        <div className={styles.conteudo}>
          <div className={styles.garagem}>
            <Carousel>
              <Carousel.Item>
                <img className={styles.carros} src={car1} alt="Carro 01" />
              </Carousel.Item>
              <Carousel.Item>
                <img className={styles.carros} src={car2} alt="Carro 02" />
              </Carousel.Item>
              <Carousel.Item>
                <img className={styles.carros} src={car3} alt="Carro 03" />
              </Carousel.Item>
              <Carousel.Item>
                <img className={styles.carros} src={car4} alt="Carro 04" />
              </Carousel.Item>
              <Carousel.Item>
                <img className={styles.carros} src={car5} alt="Carro 05" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className={styles.acesso}>
            <p>
              Aqui você pode visualizar, adicionar, editar e excluir carros.
              Utilize a lista de carros para gerenciar seu inventário de
              veículos de forma eficiente e intuitiva.
            </p>
            <button
              onClick={handleNavigateToCarList}
              className={styles.navigateButton}
            >
              Ir para a Lista de Carros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
