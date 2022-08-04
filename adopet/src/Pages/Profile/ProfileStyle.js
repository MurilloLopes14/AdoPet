import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
  text-align: center;

  & h2 {
    font-size: 2.5em;
    margin: 0 1.5em 0 1.5em;
  }

  & form {
    width: 60%;

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

    & input:disabled,
    textarea:disabled {
      background-color: var(--disabled);
      opacity: 0.9;
    }

    & label {
      font-size: 1.8em;
      & input {
        font-size: 0.6em;
        width: 50%;
      }

      & textarea {
        max-width: 50%;
        min-width: 50%;
        max-height: 200px;
        min-height: 100px;
        width: 50%;
        height: 150px;
        font-size: 0.6em;
      }
    }
    & p {
      font-size: 1.5em;
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.5em;
      transition: 0.5s;

      & svg {
        margin: 0 0 0 0.2em;
      }
    }
    & a:hover {
      transform: scale(1.1);
    }
  }

  //Tablet screen
  @media screen and (max-width: 991px) {
    & h2 {
      font-size: 1.8em;
    }

    & form {
      width: 70%;

      & .user-photo {
        & img {
          width: 200px;
          height: 200px;
        }

        & svg {
          font-size: 6em;
        }
        & p {
          font-size: 2em;
        }
      }

      & label {
        font-size: 1.5em;
        & input {
          width: 70%;
          font-size: 0.7em;
        }

        & textarea {
          max-width: 70%;
          min-width: 70%;
          max-height: 200px;
          min-height: 100px;
          width: 70%;
          height: 150px;
        }
      }

      & p {
        font-size: 1.5em;
      }

      & a {
        font-size: 1.5em;
      }
    }
  }

  //Phone Screen
  @media screen and (max-width: 700px) {
    & h2 {
      font-size: 1.1em;
    }

    & form {
      width: 75%;

      & .user-photo {
        & img {
          width: 120px;
          height: 120px;
        }

        & svg {
          font-size: 5em;
        }
        & p {
          font-size: 1.2em;
        }
      }

      & label {
        font-size: 1.1em;
        & input {
          width: 90%;
        }

        & textarea {
          max-width: 90%;
          min-width: 90%;
          max-height: 150px;
          min-height: 100px;
          width: 90%;
          height: 120px;
        }
      }

      & p,
      a {
        font-size: 1em;
      }
    }
  }
`;
