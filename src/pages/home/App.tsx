import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../component/Modal";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="HomeContainer">
      <div id="MainScreen">
        <button>
          + Adicionar Programa
        </button>

        <div className="List">
          Programas no Sistema
          <div>

          </div>
          <ul>
            <li>ID</li>
            <li>Nome Programa</li>
            <li>Data</li>
            <li>Gestor</li>
            <button>Gerenciar Programa</button>
            <button>Excluir Programa</button>
          </ul> 
          <div className= "Tabela">
            
          </div>
        </div>
      </div>
      <h3>Projeto de Arquitetura</h3>
      <p>Configuração do corpo inicial do projeto</p>

      {/* Exemplo de como usar toast */}
      <button onClick={() => toast.success("mensagem")}>Toast</button>

      {/* Exemplo de como usar modal */}
      <button onClick={openModal}>Abrir modal</button>
      {open && (
        // É obrigatório enviar os atributos title, width e close
        <Modal title="Cadastrar" width="500px" close={closeModal}>
          <p>Nome:</p>
          <input />
        </Modal>
      )}
    </div>
  );
}

export default App;
