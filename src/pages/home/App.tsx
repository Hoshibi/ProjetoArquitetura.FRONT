import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../component/Modal";
import "./App.css";

function App() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // Lógica Modal Register ------------
  const openModalRegister = () => {
    setModalRegister(true);
  };
  const closeModalRegister = () => {
    setModalRegister(false);
  };

  // Lógica Modal Edit -----------------
  const openModalEdit = () => {
    setModalEdit(true);
  };
  const closeModalEdit = () => {
    setModalEdit(false);
  };

  // Lógica Modal Delete --------------
  const openModalDelete = () => {
    setModalDelete(true);
  };
  const closeModalDelete = () => {
    setModalDelete(false);
  };

  return (
    <>
      {/* Modal Register */}
      {modalRegister && (
        <Modal title="Cadastrar" width="500px" close={closeModalRegister}>
          <p>Conteúdo cadastro</p>
        </Modal>
      )}

      {/* Modal Edit */}
      {modalEdit && (
        <Modal title="Editar" width="500px" close={closeModalEdit}>
          <p>Conteúdo editar</p>
          <input />
        </Modal>
      )}

      {/* Modal Delete */}
      {modalDelete && (
        <Modal title="Deletar" width="500px" close={closeModalDelete}>
          <p>Conteúdo deletar</p>
          <input />
        </Modal>
      )}

      {/* Página */}
      <div className="HomeContainer">
        <div id="MainScreen">
          <button onClick={openModalRegister}>+ Adicionar Programa</button>

          <div className="List">
            Programas no Sistema
            <div></div>
            <ul>
              <li>ID</li>
              <li>Nome Programa</li>
              <li>Data</li>
              <li>Gestor</li>
              <button onClick={openModalEdit}>Gerenciar Programa</button>
              <button onClick={openModalDelete}>Excluir Programa</button>
            </ul>
            <div className="Tabela"></div>
          </div>
        </div>
        <h3>Projeto de Arquitetura</h3>
        <p>Configuração do corpo inicial do projeto</p>
      </div>
    </>
  );
}

export default App;
