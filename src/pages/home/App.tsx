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
        <Modal title="Cadastrar Programa" width="500px" close={closeModalRegister}>
          Nome Programa: <input type="text" placeholder="Nome do programa a ser cadastrado"></input>
          <p>Gestor: <input type="text" placeholder="Nome do gestor responsavel"></input></p>
          <p>Objetivo: <input type="text" placeholder="Objetivo do programa"></input></p>
          <p>Justificativa: <input type="text" placeholder="Breve jusificativa para o programa"></input></p>
          <p>Envolvidos: 
            <select id="envolvidos">
                <option value="g1">Grupo 1</option>
                <option value="g2">Grupo 2</option>
                <option value="g3">Grupo 3</option>
                <option value="g4">Grupo 4</option>
                <option value="g5">Grupo 5</option>
            </select>
          </p>
          <p>Procedimento: <input type="text" placeholder="Procedimentos a serem realizados"></input></p>
          <button className="b_modal">Finalizar Cadastro</button>
        </Modal>
      )}

      {/* Modal Edit */}
      {modalEdit && (
        <Modal title="Editar Programa" width="500px" close={closeModalEdit}>
          Nome Programa: <input type="text" placeholder="Nome do programa selecionado"></input>
          <p>Data:</p>
          <p className="date">06/12/2022 - 01:10</p>
          <p>Gestor: <input type="text" placeholder="Nome do gestor responsavel"></input></p>
          <p>Objetivo: <input type="text" placeholder="Objetivo do programa"></input></p>
          <p>Justificativa: <input type="text" placeholder="Breve jusificativa do programa"></input></p>
          <p>Envolvidos: 
            <select id="envolvidos">
                <option value="g1">Grupo 1</option>
                <option value="g2">Grupo 2</option>
                <option value="g3">Grupo 3</option>
                <option value="g4">Grupo 4</option>
                <option value="g5">Grupo 5</option>
            </select>
          </p>
          <p>Procedimento: <input type="text" placeholder="Procedimentos a serem realizados"></input></p>
          <button className="b_modal">Cancelar</button><button className="b_modal">Confirmar Alteracoes</button>
        </Modal>
      )}

      {/* Modal Delete */}
      {modalDelete && (
        <Modal title="Deletar" width="500px" close={closeModalDelete}>
          <p>Deseja apagar o programa 'colocar ID'</p>
          <p></p>
          <button className="b_modal">NAO</button><button className="b_modal">SIM</button>
        </Modal>
      )}

      {/* Página */}
      <div className="HomeContainer">
        <div className="List">
          <table>
            <caption><b>Programas no Sistema</b><button onClick={openModalRegister}>+ Adicionar Programa</button></caption>
            <p></p>
            <tr>            
              <th>ID</th>
              <th>Nome Programa</th>
              <th>Data</th>
              <th>Gestor</th>
              <th>Opcoes</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Rede Eletrica</td>
              <td>24/12/2022</td>
              <td>Carlos</td>
              <td>
                <img src="../trash.png" alt="" onClick={openModalDelete}/>
                <img src="../pencil.png" alt="" onClick={openModalEdit}/>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rede Eolica</td>                
              <td>05/03/2023</td>
              <td>Roberto</td>
              <td>
                <img src="../trash.png" alt="" onClick={openModalDelete}/>
                <img src="../pencil.png" alt="" onClick={openModalEdit}/>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Manutencao Subestacao</td>
              <td>12/01/2023</td>
              <td>Mariana</td>
              <td>
                <img src="../trash.png" alt="" onClick={openModalDelete}/>
                <img src="../pencil.png" alt="" onClick={openModalEdit}/>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Manutencao Patio</td>
              <td>12/01/2022</td>
              <td>Gustavo</td>
              <td>
                <img src="../trash.png" alt="" onClick={openModalDelete}/>
                <img src="../pencil.png" alt="" onClick={openModalEdit}/>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
