//Other
import logo from "../../Assets/Images/Logo.png";

//Style
import { HomeStyle } from "./HomeStyle";

//Component
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HomeStyle>
      <img src={logo} alt="Logo" />
      <h1>Boas vindas!</h1>
      <p>Que tal mudar a sua vida adotando um pet!?</p>

      <div className="routes">
        <h2>
          Quero me cadastrar! <Link to="/sign">Cadastrar</Link>
        </h2>
        <h2>
          Já possui uma conta? <Link to="/login">Clique aqui</Link>
        </h2>
      </div>
    </HomeStyle>
  );
};
