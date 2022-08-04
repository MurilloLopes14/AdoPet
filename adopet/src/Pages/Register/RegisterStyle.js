import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;

  & .submit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    & input[type="submit"] {
      margin-top: 1em;
      cursor: pointer;
    }
  }

  //Tablet Sreen
  @media screen and (max-width: 991px) {
    & p.error,
    p.success {
      font-size: 1.5em;
    }

    & form {
      width: 70%;
      & label {
        font-size: 1.5em;
        & input {
          width: 50%;
          font-size: 0.7em;
        }
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
    & img {
      max-width: 200px;
      max-height: 200px;
    }

    & h2 {
      font-size: 1em;
    }

    & form {
      & .submit {
        justify-content: center;
      }
    }
  }
`;
