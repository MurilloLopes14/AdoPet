//Styles
import { GalleryStyle } from "./GalleryStyle";

//Hooks
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pets/pets.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <GalleryStyle>
        <div className="title">
          <h1>Olá! Veja os amigos disponíveis para adoção!</h1>
        </div>
        <div className="pets">
          {data.map((pet) => (
            <div className="pet-container" key={pet.id}>
              <li>
                <img src={pet.image} alt="pet" />
                <h3>{pet.name}</h3>
                <p>
                  <span>Características:</span>
                  <br /> {pet.personality}
                </p>
                <p>
                  {" "}
                  <span>Idade:</span>
                  <br /> {pet.age}
                </p>
                <p>
                  {" "}
                  <span>E-mail de contato:</span>
                  <br /> {pet.mail}
                </p>
                <p>
                  {" "}
                  <span>Telefone para contato:</span>
                  <br /> {pet.phone}
                </p>
              </li>
            </div>
          ))}
        </div>
      </GalleryStyle>
    </>
  );
};
