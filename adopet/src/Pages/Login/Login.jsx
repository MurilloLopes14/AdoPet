//Sytles
import { LoginStyle } from "./LoginStyle";

//Sources
import Logo2 from "../../Assets/Images/logo-2.png";

//Hooks
import { useResetComponentMessage } from "../../Hooks/useResetMessage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { useNavigate } from "react-router-dom";
import { Message } from "../../Components/Message/Message";

//Redux
import { login, reset } from "../../Slices/authSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const resetMessage = useResetComponentMessage(dispatch);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));

    resetMessage();
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <LoginStyle>
      <img src={Logo2} alt="logo" />
      <h1>Já possui conta, então faça seu login!</h1>
      {error && <Message msg={error} type="error" />}
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input
            type="email"
            placeholder="Insira seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </label>

        {!loading && (
          <div className="submit">
            <input type="submit" value="Entrar" />
          </div>
        )}
        {loading && <input type="submit" value="Aguarde . . ." disabled />}
      </form>
    </LoginStyle>
  );
};
