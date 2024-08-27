import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CarForm.module.css"; // Importa o módulo CSS
import ConfirmActionModal from "../../ConfirmActionModal";

function CarForm({ onSave }) {
  const location = useLocation();
  const navigate = useNavigate();
  const carData = location.state?.car || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [car, setCar] = useState({
    id: carData.id || null,
    nome: carData.nome || "",
    marca: carData.marca || "",
    ano_fabricacao: carData.ano_fabricacao || "",
    pais_origem: carData.pais_origem || "",
    cor: carData.cor || "",
  });

  const [errors, setErrors] = useState({});

  function containsInvalidChars(value) {
    // Verifica se a string contém caracteres < ou >
    return /[<>]/.test(value);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    // Verifica caracteres inválidos
    if (containsInvalidChars(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Caracteres < e > não são permitidos.",
      }));
      return;
    }

    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  }

  function validateField(name, value) {
    switch (name) {
      case "nome":
        if (!value.trim()) {
          setErrors((prev) => ({ ...prev, nome: "Nome é obrigatório." }));
        } else if (value.length < 5) {
          setErrors((prev) => ({
            ...prev,
            nome: "Nome deve conter ao menos 5 letras.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, nome: "" }));
        }
        break;
      case "marca":
        if (!value.trim()) {
          setErrors((prev) => ({ ...prev, marca: "Marca é obrigatória." }));
        } else {
          setErrors((prev) => ({ ...prev, marca: "" }));
        }
        break;
      case "ano_fabricacao":
        if (!value || isNaN(value) || value < 1850) {
          setErrors((prev) => ({
            ...prev,
            ano_fabricacao:
              "Ano de fabricação inválido. Deve ser maior que 1850.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, ano_fabricacao: "" }));
        }
        break;
      case "pais_origem":
        if (!value.trim()) {
          setErrors((prev) => ({
            ...prev,
            pais_origem: "País de origem é obrigatório.",
          }));
        } else if (value.length < 4) {
          setErrors((prev) => ({
            ...prev,
            pais_origem: "País deve conter ao menos 4 letras.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, pais_origem: "" }));
        }
        break;
      case "cor":
        if (!value.trim()) {
          setErrors((prev) => ({ ...prev, cor: "Cor é obrigatória." }));
        } else {
          setErrors((prev) => ({ ...prev, cor: "" }));
        }
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formIsValid = Object.values(errors).every((error) => !error);
    if (formIsValid) {
      setIsModalOpen(true);
    }
  }

  function confirmAction() {
    onSave(car);
    navigate("/carlist"); // Redireciona após salvar
  }

  function cancelAction() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    document.title = car.id ? "Editar Carro" : "Adicionar Carro";
  }, [car.id]);

  return (
    <div className={styles.baseContainer}>
      <div className={styles.carFormContainer}>
        <h1>{car.id ? "Editar Carro" : "Adicionar Carro"}</h1>
        <form onSubmit={handleSubmit} className={styles.carForm}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={car.nome}
              onChange={handleChange}
              required
            />
            {errors.nome && <div className={styles.error}>{errors.nome}</div>}
          </label>
          <label>
            Marca:
            <input
              type="text"
              name="marca"
              value={car.marca}
              onChange={handleChange}
              required
            />
            {errors.marca && <div className={styles.error}>{errors.marca}</div>}
          </label>
          <label>
            Ano de Fabricação:
            <input
              type="number"
              name="ano_fabricacao"
              value={car.ano_fabricacao}
              onChange={handleChange}
              required
            />
            {errors.ano_fabricacao && (
              <div className={styles.error}>{errors.ano_fabricacao}</div>
            )}
          </label>
          <label>
            País de Origem:
            <input
              type="text"
              name="pais_origem"
              value={car.pais_origem}
              onChange={handleChange}
              required
            />
            {errors.pais_origem && (
              <div className={styles.error}>{errors.pais_origem}</div>
            )}
          </label>
          <label>
            Cor:
            <input
              type="text"
              name="cor"
              value={car.cor}
              onChange={handleChange}
              required
            />
            {errors.cor && <div className={styles.error}>{errors.cor}</div>}
          </label>
          <button
            type="submit"
            className={styles.saveButton}
            disabled={Object.values(errors).some((error) => error)}
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => navigate("/carlist")}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </form>
      </div>
      <ConfirmActionModal
        isOpen={isModalOpen}
        onClose={cancelAction}
        onConfirm={confirmAction}
        titulo={car.id ? "Confirmar Edição" : "Confirmar Inclusão"}
        mensagem={
          car.id
            ? "Tem certeza de que deseja editar este carro?"
            : "Tem certeza de que deseja adicionar um novo carro?"
        }
      />
    </div>
  );
}

export default CarForm;
