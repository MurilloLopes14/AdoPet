//Styles
import { ProfileStyle } from "./ProfileStyle";

//Components
import { Message } from "../../Components/Message/Message";
import { NavLink } from "react-router-dom";

//Hooks
import { useResetComponentMessage } from "../../Hooks/useResetMessage";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Icons
import { AiTwotoneEdit } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

//Redux
import { profile } from "../../Slices/userSlice";
import { uploads } from "../../Utils/config";

export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user, message, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
      setPhone(user.phone);
      setCity(user.city);
    }

    if (user.profileImage) {
      setProfileImage(user.profileImage);
    }
  }, [user]);

  return (
    <ProfileStyle>
      <h2>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </h2>
      <form>
        <p>Sua foto de perfil</p>
        <div className="user-photo">
          {user.profileImage ? (
            <img
              src={`${uploads}/users/${user.profileImage}`}
              alt={user.name}
            />
          ) : (
            <BsPersonCircle />
          )}
        </div>
        <label>
          Nome do usuário:
          <input type="text" value={name} disabled />
        </label>
        <label>
          E-mail de usuário:
          <input type="email" value={email} disabled />
        </label>
        <label>
          Telefone:
          <input type="phone" value={phone} disabled />
        </label>
        <label>
          Cidade:
          <input type="text" value={city} disabled />
        </label>
        <label>
          Descrição do usuário:
          <textarea value={bio} disabled></textarea>
        </label>
        <p>Deseja editar as informaçõs acima?</p>
        <NavLink to={`/update/profile`}>
          clique aqui
          <AiTwotoneEdit />
        </NavLink>
      </form>
    </ProfileStyle>
  );
};
