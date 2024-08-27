import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import CarList from "./components/Car/List";
import CarForm from "./components/Car/Form";

// Importa a lista de carros
import GaragemEstoque from "./Data/GaragemEstoque";

import styles from "./App.module.css"; // Importa o módulo CSS

const App = () => {
  // Nome da aplicação a partir da variável global
  const appName = process.env.REACT_APP_APP_NAME || "Garagem"; // Valor padrão se a variável não estiver definida

  // Estado para gerenciar a lista de carros
  const [carList, setCarList] = useState(GaragemEstoque);

  // Função para adicionar ou atualizar um carro
  function handleSaveCar(car) {
    setCarList((prev) => {
      if (car.id) {
        // Atualiza um carro existente
        return prev.map((c) => (c.id === car.id ? car : c));
      } else {
        // Adiciona um novo carro
        return [...prev, { ...car, id: Date.now() }];
      }
    });
  }
  return (
    <Router>
      <div className={styles.app}>
        <Header appName={appName} />

        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <Routes>
              <Route
                path="/carlist"
                element={<CarList carList={carList} setCarList={setCarList} />}
              />
              <Route
                path="/carform"
                element={<CarForm onSave={handleSaveCar} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Content />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
