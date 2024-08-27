import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Ícone do WhatsApp
import "./WhatsAppButton.css"; // Importa o arquivo CSS para estilizar o botão

function WhatsAppButton(props) {
  function handleClick() {
    // Recebe a variavél com o número do telefone
    const phoneNumber = props.phoneNumber;
    const message = encodeURIComponent(props.message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      <span>Contato via WhatsApp</span>
    </button>
  );
}

export default WhatsAppButton;

//"Olá, gostaria de saber mais sobre seus produtos!"
