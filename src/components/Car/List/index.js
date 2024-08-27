import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarList.module.css"; // Importa o módulo CSS
import ConfirmActionModal from "../../ConfirmActionModal";

function CarList({ carList, setCarList }) {
  const [selectedCars, setSelectedCars] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  /* Função para apagar registros */
  function handleDeleteSelected() {
    setIsModalOpen(true);
  }

  function confirmDelete() {
    setCarList((prevCarList) =>
      prevCarList.filter((car) => !selectedCars.has(car.id))
    );
    setSelectedCars(new Set());
    setIsModalOpen(false);
  }

  function handleEditCar(car) {
    navigate("/carform", { state: { car } });
  }

  function handleAddCar() {
    navigate("/carform");
  }

  /* Função para tratar quando o usuário seleciona uma linha da tabela */
  function handleRowClick(id) {
    setSelectedCars((prev) => {
      const newSelectedCars = new Set(prev);
      if (newSelectedCars.has(id)) {
        newSelectedCars.delete(id);
      } else {
        newSelectedCars.add(id);
      }
      return newSelectedCars;
    });
  }

  const filteredCars = carList.filter(
    (car) =>
      car.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.cor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.ano_fabricacao.toString().includes(searchQuery) ||
      car.pais_origem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.marca.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const currentData = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      <h1>Lista de Carros</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleAddCar} className={styles.addButton}>
          Adicionar Novo Carro
        </button>
        <button onClick={handleDeleteSelected} className={styles.deleteButton}>
          Excluir Selecionados
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {/*<th>Selecionar</th>*/}
            <th>Nome</th>
            <th>Marca</th>
            <th>Ano de Fabricação</th>
            <th>País de Origem</th>
            <th>Cor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((car) => (
            <tr
              key={car.id}
              onClick={() => handleRowClick(car.id)}
              className={selectedCars.has(car.id) ? styles.selectedRow : ""}
            >
              {/*<td>
                <input
                  type="checkbox"
                  checked={selectedCars.has(car.id)}
                  onChange={() => handleCheckboxChange(car.id)}
                />
              </td>*/}
              <td>{car.nome}</td>
              <td>{car.marca}</td>
              <td>{car.ano_fabricacao}</td>
              <td>{car.pais_origem}</td>
              <td>{car.cor}</td>
              <td>
                <button
                  onClick={() => handleEditCar(car)}
                  className={styles.editButton}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
      <ConfirmActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        titulo="Confirmar Exclusão"
        mensagem="Tem certeza de que deseja excluir os carros selecionados?"
      />
    </div>
  );
}

export default CarList;
