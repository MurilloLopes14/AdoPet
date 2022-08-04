//Styles
import { ContactSyle } from "./ContactStyle";

//hooks
import { useState } from "react";

//Components
import { Message } from "../../Components/Message/Message";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pet, setPet] = useState("");
  const [msg, setMsg] = useState("");
  const [dataStatus, setDataStatus] = useState({
    type: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (validateForm()) {
      setDataStatus({
        type: "success",
        msg: "Mensagem enviada com sucesso!",
      });
    }

    setName("");
    setPhone("");
    setPet("");
    setMsg("");
  };

  const validateForm = () => {
    setTimeout(() => {
      setDataStatus({
        type: "",
        msg: "",
      });
    }, 2000);

    if (!name)
      return setDataStatus({
        type: "error",
        msg: "O nome é obrigatório!",
      });

    if (!phone) {
      return setDataStatus({
        type: "error",
        msg: "O Telefone para contato é obrigatório!",
      });
    }

    if (!pet) {
      return setDataStatus({
        type: "error",
        msg: "Precisamos saber o nome do pet",
      });
    }

    if (!msg) {
      return setDataStatus({
        type: "error",
        msg: "Por favor, não envie o campo de mensagem vazio",
      });
    }

    return true;
  };

  return (
    <ContactSyle>
      <h2>
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </h2>

      {dataStatus.type === "error" ? (
        <Message type="error" msg={dataStatus.msg} />
      ) : (
        ""
      )}
      {dataStatus.type === "success" ? (
        <Message type="success" msg={dataStatus.msg} />
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </label>
        <label>
          Telefone:
          <input
            type="phone"
            placeholder="Insira seu telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone || ""}
          />
        </label>
        <label>
          Nome do Pet:
          <input
            type="text"
            placeholder="Coloque o nome do pet"
            onChange={(e) => setPet(e.target.value)}
            value={pet || ""}
          />
        </label>
        <label>
          Nome do Pet:
          <textarea
            placeholder="Escreva sua mensagem aqui"
            onChange={(e) => setMsg(e.target.value)}
            value={msg || ""}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </ContactSyle>
  );
};
