// src/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Configura o teste
test("renders the header, navbar, and footer", () => {
  render(<App />);

  // Verifica se o Header está presente
  expect(screen.getByRole("banner")).toBeInTheDocument();

  // Verifica se o NavBar está presente
  expect(screen.getByRole("navigation")).toBeInTheDocument();

  // Verifica se o Footer está presente
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

//test("navigates to car list page", () => {
//  render(<App />);
//
//  // Encontra o link para a página de lista de carros e clica nele
//  fireEvent.click(screen.getByText(/Lista de Carros/i));
//
//  // Verifica se a URL está correta
//  expect(window.location.pathname).toBe("/carlist");
//});

//test("navigates to car form page", () => {
//  render(<App />);

// Encontra o botão para adicionar um novo carro e clica nele
// fireEvent.click(screen.getByText(/Garagem Hot Wheels/i));

// Verifica se a URL está correta
// expect(window.location.pathname).toBe("/carform");
//});
