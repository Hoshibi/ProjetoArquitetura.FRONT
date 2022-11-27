import { toast } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="HomeContainer">
      <h3>Projeto de Arquitetura</h3>
      <p>Configuração do corpo inicial do projeto</p>
      <button onClick={() => toast.success("mensagem")}>Toast</button>
    </div>
  );
}

export default App;
