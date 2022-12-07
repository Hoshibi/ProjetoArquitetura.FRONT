import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "../../component/Modal";
import { ProgramPayload } from "../../dto/program-payload";
import { ProgramType } from "../../interface/program.interface";
import programServices from "../../services/program";
import "./Programs.css";

function App() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [data, setData] = useState<ProgramType[]>();
  const [idEdit, setIdEdit] = useState<string>();
  const [idDelete, setIdDelete] = useState<string>();
  const [controlRender, setControlRender] = useState(0);

  // useForms ---------------------------------------------------
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    setValue: setValueRegister,
  } = useForm<ProgramPayload>({
    mode: "onTouched",
  });

  const {
    handleSubmit: handleSubmitEdit,
    control: controlEdit,
    setValue: setValueEdit,
  } = useForm<ProgramPayload>({
    mode: "onTouched",
  });

  // Lógica Modal ---------------------------------------------------------
  // Lógica Modal Register
  const openModalRegister = () => {
    setModalRegister(true);
    setValueRegister("NomePrograma", "");
    setValueRegister("Gestor", "");
    setValueRegister("Objetivo", "");
    setValueRegister("Justificativa", "");
    setValueRegister("Envolvidos", "");
    setValueRegister("Procedimento", "");
  };
  const closeModalRegister = () => {
    setModalRegister(false);
  };

  // Lógica Modal Edit
  const openModalEdit = () => {
    setModalEdit(true);
  };
  const closeModalEdit = () => {
    setModalEdit(false);
  };

  // Lógica Modal Delete
  const openModalDelete = () => {
    setModalDelete(true);
  };
  const closeModalDelete = () => {
    setModalDelete(false);
  };

  // useEffect --------------------------------------------------
  useEffect(() => {
    programServices()
      .getPrograms()
      .then((response) => {
        setData(response.data);
      });
  }, [controlRender]);

  useEffect(() => {
    console.log(idEdit);
    idEdit &&
      programServices()
        .getProgramsById(idEdit)
        .then((response) => {
          console.log(response.data);
          const item: ProgramType = response.data;
          setValueEdit("NomePrograma", item.NomePrograma);
          setValueEdit("Gestor", item.Gestor);
          setValueEdit("Objetivo", item.Objetivo);
          setValueEdit("Justificativa", item.Justificativa);
          setValueEdit("Envolvidos", item.Envolvidos);
          setValueEdit("Procedimento", item.Procedimento);
        });
  }, [idEdit]);

  // Submits ---------------------------------------------------
  const registerSubmit: SubmitHandler<ProgramPayload> = async (
    values: ProgramPayload
  ) => {
    await programServices()
      .registerProgram(values)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        setControlRender(controlRender + 1);
        closeModalRegister();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no processo de cadastro");
      });
  };

  const editSubmit: SubmitHandler<ProgramPayload> = async (
    values: ProgramPayload
  ) => {
    console.log(values);
    if (idEdit) {
      await programServices()
        .editProgram(idEdit, values)
        .then((response) => {
          toast.success("Edição realizada com sucesso");
          setControlRender(controlRender + 1);
          closeModalEdit();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro no processo de edição");
        });
    }
  };

  const deleteSubmit = async () => {
    console.log(idDelete);
    if (idDelete) {
      await programServices()
        .deleteProgram(idDelete)
        .then((response) => {
          toast.success("Exclusão realizada com sucesso");
          setControlRender(controlRender + 1);
          closeModalDelete();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro no processo de exclusão");
        });
    }
  };

  return (
    <>
      {/* Modal Register */}
      {modalRegister && (
        <Modal
          title="Cadastrar Programa"
          width="500px"
          close={closeModalRegister}
        >
          <form onSubmit={handleSubmitRegister(registerSubmit)}>
            <p>
              Nome Programa:{" "}
              <Controller
                control={controlRegister}
                name="NomePrograma"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Nome do programa a ser cadastrado"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Gestor:{" "}
              <Controller
                control={controlRegister}
                name="Gestor"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Nome do gestor responsavel"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Objetivo:
              <Controller
                control={controlRegister}
                name="Objetivo"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Objetivo do programa"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Justificativa:{" "}
              <Controller
                control={controlRegister}
                name="Justificativa"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Breve jusificativa para o programa"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Envolvidos:
              <Controller
                control={controlRegister}
                name="Envolvidos"
                render={({ field: { value, onChange } }) => (
                  <select
                    id="envolvidos"
                    onChange={onChange}
                    value={value || ""}
                  >
                    <option value="" disabled selected>
                      Selecione um grupo
                    </option>
                    <option value="g1">Grupo 1</option>
                    <option value="g2">Grupo 2</option>
                    <option value="g3">Grupo 3</option>
                    <option value="g4">Grupo 4</option>
                    <option value="g5">Grupo 5</option>
                  </select>
                )}
              />
            </p>
            <p>
              Procedimento:{" "}
              <Controller
                control={controlRegister}
                name="Procedimento"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Procedimentos a serem realizados"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <button className="b_modal">Finalizar Cadastro</button>
          </form>
        </Modal>
      )}

      {/* Modal Edit */}
      {modalEdit && (
        <Modal title="Editar Programa" width="500px" close={closeModalEdit}>
          <form onSubmit={handleSubmitEdit(editSubmit)}>
            <p>
              Nome Programa:{" "}
              <Controller
                control={controlEdit}
                name="NomePrograma"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Nome do programa a ser cadastrado"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Gestor:{" "}
              <Controller
                control={controlEdit}
                name="Gestor"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Nome do gestor responsavel"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Objetivo:
              <Controller
                control={controlEdit}
                name="Objetivo"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Objetivo do programa"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Justificativa:{" "}
              <Controller
                control={controlEdit}
                name="Justificativa"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Breve jusificativa para o programa"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <p>
              Envolvidos:
              <Controller
                control={controlEdit}
                name="Envolvidos"
                render={({ field: { value, onChange } }) => (
                  <select
                    id="envolvidos"
                    onChange={onChange}
                    value={value || ""}
                  >
                    <option value="" disabled selected>
                      Selecione um grupo
                    </option>
                    <option value="g1">Grupo 1</option>
                    <option value="g2">Grupo 2</option>
                    <option value="g3">Grupo 3</option>
                    <option value="g4">Grupo 4</option>
                    <option value="g5">Grupo 5</option>
                  </select>
                )}
              />
            </p>
            <p>
              Procedimento:{" "}
              <Controller
                control={controlEdit}
                name="Procedimento"
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    placeholder="Procedimentos a serem realizados"
                    onChange={onChange}
                    value={value || ""}
                  />
                )}
              />
            </p>
            <button className="b_modal" type="submit">
              Confirmar Alteracoes
            </button>
            <button
              className="cancel_b_modal"
              type="button"
              onClick={closeModalEdit}
            >
              Cancelar
            </button>
          </form>
        </Modal>
      )}

      {/* Modal Delete */}
      {modalDelete && (
        <Modal title="Deletar" width="400px" close={closeModalDelete}>
          <p>Realmente deseja apagar o programa {idDelete}</p>
          <p></p>
          <button className="b_modal" type="button" onClick={deleteSubmit}>
            Sim
          </button>
          <button
            className="cancel_b_modal"
            type="button"
            onClick={closeModalDelete}
          >
            Não
          </button>
        </Modal>
      )}

      {/* Página */}
      <div className="HomeContainer">
        <div className="Title">
          <div className="Logo">
            <img src="../brasao_pr.png" alt="logo" />
            <b>Gerenciamento de Programa</b>
          </div>
          <button onClick={openModalRegister}>+ Adicionar Programa</button>
        </div>
        <div className="List">
          <table>
            <tr>
              <th>ID</th>
              <th>Nome do Programa</th>
              <th>Data de cadastro</th>
              <th>Objetivo</th>
              <th>Gestor Responsável</th>
              <th>Opções</th>
            </tr>
            {data &&
              data.map((item) => (
                <tr id={item.Id.toString()}>
                  <td>{item.Id}</td>
                  <td>{item.NomePrograma}</td>
                  <td>{item.Data}</td>
                  <td>{item.Objetivo}</td>
                  <td>{item.Gestor}</td>
                  <td>
                    <img
                      src="../pencil.png"
                      alt=""
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setIdEdit(`${item.Id}`);
                        openModalEdit();
                      }}
                    />
                    <img
                      src="../trash.png"
                      alt=""
                      onClick={() => {
                        setIdDelete(`${item.Id}`);
                        openModalDelete();
                      }}
                    />
                  </td>
                </tr>
              ))}
          </table>
          {data?.length === 0 && <p>Não há programas registrados</p>}
        </div>
      </div>
    </>
  );
}

export default App;
