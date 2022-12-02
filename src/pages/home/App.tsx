import { toast } from "react-toastify";
import "./App.css";

function App() {
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
      <button onClick={() => toast.success("mensagem")}>Toast</button>
    </div>
  );
}

export default App;
