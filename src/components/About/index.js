import React from "react";
import Mapa from "../Mapa"; // Importa o componente Mapa
import WhatsAppButton from "../WhatsAppButton";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet
import styles from "./About.module.css"; // Importa o módulo CSS para a página About

// Coordenadas
const coordenada = [-30.059297, -51.172996]; // Coordenadas da loja
const empresa = "Universidade Pontifícia Catolica do Rio Grande do Sul";
const endereco = "Av. Ipiranga, 6681 - Partenon, Porto Alegre - RS, 90619-900";

//Parametros para o botão Whatsapp
const whatsappPhoneNumber = "5511999999999";
const whatsappMessage = "Olá, gostaria de saber mais sobre seus carrinhos!";

const About = () => {
  return (
    <div>
      <div className={styles.sobreNos}>
        {/* Seção Sobre Nos :-) */}
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>Sobre Nós</h1>

          <section className={styles.descriptionSection}>
            <p className={styles.description}>
              Bem-vindo à nossa "Garagem HotWheels", o destino definitivo para
              todos os entusiastas de carrinhos Hot Wheels!
            </p>
            <p>&nbsp;</p>
            <p className={styles.description}>
              Aqui, a emoção das corridas encontra a diversão dos colecionáveis,
              oferecendo uma vasta coleção dos mais recentes lançamentos e das
              edições especiais mais cobiçadas.
            </p>
            <p>&nbsp;</p>
            <p className={styles.description}>
              🚗💨 <strong>Acelere para a Diversão!</strong>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles.description}>
              💬 <strong>Fale Conosco</strong>: Nossa equipe está aqui para
              ajudar! Se tiver qualquer dúvida ou precisar de recomendações, não
              hesite em nos contactar.
            </p>
            <p>&nbsp;</p>
            <WhatsAppButton
              phoneNumber={whatsappPhoneNumber}
              message={whatsappMessage}
            />
          </section>
        </div>
      </div>

      {/* Seção do mapa */}
      <div className={styles.mapa}>
        <div className={styles.mapTexto}>
          <section className={styles.mapaSection}>
            <p className={styles.text}>
              <strong>Venha nos fazer uma visitar!</strong>
            </p>
            <p className={styles.text}>
              Estamos localizados na <strong>{empresa}</strong>
            </p>
            <p className={styles.text}>{endereco}</p>
          </section>
        </div>
        <div className={styles.mapContainer}>
          {/* Inclusão do componente Mapa */}
          <Mapa coordenada={coordenada} endereco={endereco} empresa={empresa} />
        </div>
      </div>
    </div>
  );
};

export default About;
