//Styles
import { RegisterStyle } from "./RegisterStyle";

//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../Hooks/useResetMessage";

//Components
import { Message } from "../../Components/Message/Message";

//Redux
import { register, reset } from "../../Slices/authSlice";

//Others
import Logo2 from "../../Assets/Images/logo-2.png";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));
    resetMessage();
  };

  //clean all states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <RegisterStyle>
      <img src={Logo2} alt="logo" />
      <h2>
        Ainda não possui cadastro? Então antes de buscar seu melhor amigo,
        precisamos de alguns dados seus:
      </h2>
      {error && <Message msg={error} type="error" />}
      <form onSubmit={handleRegister}>
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
          E-mail
          <input
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </label>
        <label>
          Confirme sua senha
          <input
            type="password"
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword || ""}
          />
        </label>
        {!loading && (
          <div className="submit">
            <input type="submit" value="Cadastar" />
          </div>
        )}
        {loading && <input type="submit" value="Aguarde . . ." disabled />}
      </form>
    </RegisterStyle>
  );
};
