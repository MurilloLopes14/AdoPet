//Styles
import { EditProfileStyle } from "./EditProfileStyle";

//Hooks
import { useNavigate } from "react-router-dom";
import { useResetComponentMessage } from "../../Hooks/useResetMessage";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import { Link } from "react-router-dom";
import { Message } from "../../Components/Message/Message";
import { uploads } from "../../Utils/config";

//Redux
import { updateProfile, profile } from "../../Slices/userSlice";

export const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, loading, message, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio);
      setCity(user.city);
      setPhone(user.phone);
      setProfileImage(user.profileImage);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Take data from state
    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (phone) {
      userData.phone = phone;
    }

    if (city) {
      userData.city = city;
    }

    if (bio) {
      userData.bio = bio;
    }

    //building form data
    const formData = new FormData();

    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    );

    formData.append("user", userFormData);

    await dispatch(updateProfile(formData));

    navigate(`/profile/${user._id}`);
  };

  const handleFile = (e) => {
    //Image Preview
    const image = e.target.files[0];

    setPreviewImage(image);

    //Update image State
    setProfileImage(image);
  };

  return (
    <EditProfileStyle>
      {error && <Message msg={error} type="error" />}
      <form onSubmit={handleSubmit}>
        <Link to={`/profile/${user._id}`} className="cancel">
          Cancelar
        </Link>
        <h3>Edite seus dados neste formulário de edição</h3>
        <div className="user-photo">
          {(user.profileImage || previewImage) && (
            <img
              src={
                previewImage
                  ? URL.createObjectURL(previewImage)
                  : `${uploads}/users/${user.profileImage}`
              }
              alt={user.name}
            />
          )}
          <p>Sua foto de perfil</p>
        </div>
        <label htmlFor="0" className="file">
          Escolher arquivo
        </label>
        <input type="file" id="0" onChange={handleFile} value={""} />
        <label>
          Nome:
          <input
            type="text"
            placeholder="Atualize seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </label>
        <label>
          Telefone:
          <input
            type="phone"
            placeholder="Seu Nº de telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone || ""}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            placeholder="Sua cidade"
            onChange={(e) => setCity(e.target.value)}
            value={city || ""}
          />
        </label>
        <label>
          Sobre você:
          <textarea
            placeholder="Conte-nos mais sobre você!"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          ></textarea>
        </label>

        {!loading && (
          <div className="submit">
            <input type="submit" value="Atualizar" />
          </div>
        )}
        {loading && <input type="submit" value="Aguarde . . ." disabled />}
      </form>
    </EditProfileStyle>
  );
};
