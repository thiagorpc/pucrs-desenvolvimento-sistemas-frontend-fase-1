import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/img/logo128.png";

function Footer() {
  // Função para obter o ano atual
  const getCurrentYear = () => new Date().getFullYear();

  // Nome da aplicação a partir das variáveis de ambiente
  const appName = process.env.REACT_APP_APP_NAME || "Garagem"; // Valor padrão se a variável não estiver definida

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerColumn}>
          <img className={style.footerLogo} src={logo} alt="logo" />
        </div>
        <div className={style.footerColumnCenter}>
          <h4 className={style.footerColumnText16}>Sobre</h4>
          <p>
            <strong>
              &copy; {getCurrentYear()} {appName}
            </strong>
          </p>
          <p>Todos os direitos reservados.</p>
          <p>PUC RS | Desenvolvimento de Sistemas Frontend (Fase 01)</p>
        </div>
        <div className={style.footerColumRight}>
          <h4 className={style.footerColumnText16}>Contato</h4>
          <p>Email: contato@garagem-hotwheels.com</p>
          <p>Telefone: (99) 9999-9999</p>
          <h4 className={style.footerColumnText16}>
            <a className={style.footerContact} href="/about">
              Quer saber mais?
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
