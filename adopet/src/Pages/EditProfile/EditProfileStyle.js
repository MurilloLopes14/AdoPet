import styled from "styled-components";

export const EditProfileStyle = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & form {
    display: flex;
    flex-direction: column;
    width: 40%;

    & .cancel {
      color: var(--f_secondary);
      font-size: 2em;
      transition: 0.5s;
    }

    & .cancel:hover {
      opacity: 0.7;
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    & h3 {
      font-size: 1.5em;
    }

    & .user-photo {
      & img {
        width: 300px;
        height: 320px;
        border-radius: 50%;
      }

      & svg {
        font-size: 7em;
      }
      & p {
        font-size: 1.4em;
      }
    }

    & input[type="file"] {
      display: none;
    }

    & .file {
      width: 30%;
      border-radius: 10px;
      background-color: var(--bg_terciary);
      color: var(--f_terciary);
      font-size: 0.9em;
      margin: 0.5em;
      padding: 0.2em;
    }

    & label {
      font-size: 1.5em;
      & input {
        font-size: 0.7em;
        width: 70%;
      }
    }

    & textarea {
      max-width: 70%;
      min-width: 70%;
      max-height: 200px;
      min-height: 100px;
      width: 70%;
      height: 150px;
    }

    & .submit {
      width: 70%;
      margin: 0.5em;
      display: flex;
      justify-content: flex-end;
      & input[type="submit"] {
        font-size: 1.2em;
        width: 30%;
      }
    }
  }

  //Tablet Screen
  @media screen and (max-width: 991px) {
    & h2 {
      font-size: 2em;
    }

    & form {
      width: 80%;

      & h3 {
        font-size: 1.5em;
      }

      & .user-photo {
        & svg {
          font-size: 6em;
        }
        & p {
          font-size: 2em;
        }
      }
      & .file {
        width: 60%;
        font-size: 1.5em;
      }

      & label {
        font-size: 1.5em;

        & input {
          width: 50%;
          font-size: 0.8em;
        }
      }

      & textarea {
        max-width: 50%;
        min-width: 50%;
        max-height: 200px;
        min-height: 100px;
        width: 50%;
        height: 150px;
        font-size: 0.7em;
      }

      & .submit {
        width: 50%;
        justify-content: center;
        & input[type="submit"] {
          width: 50%;
          font-size: 1.2em;
        }
      }
    }
  }

  //Phone Screen
  @media screen and (max-width: 700px) {
    & h2 {
      font-size: 1.2em;
    }

    & form {
      width: 80%;

      & .cancel {
        font-size: 1.5em;
      }

      & .user-photo {
        & img {
          width: 150px;
          height: 150px;
        }
        & svg {
          font-size: 5em;
        }
        & p {
          font-size: 1.2em;
        }
      }

      & .file {
        width: 70%;
        font-size: 1em;
      }

      & label {
        font-size: 1em;

        & input {
          width: 70%;
        }
      }

      & textarea {
        max-width: 70%;
        min-width: 70%;
        max-height: 200px;
        min-height: 100px;
        width: 70%;
        height: 150px;
      }

      & .submit {
        justify-content: center;
        width: 100%;

        & input[type="submit"] {
          width: 50%;
          font-size: 0.8em;
        }
      }
    }
  }
`;
