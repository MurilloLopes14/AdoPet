import styled from "styled-components";

export const ContactSyle = styled.div`
  //Desktop Screen
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & h2 {
    font-size: 2em;
  }

  & form input[type="submit"] {
    margin-top: 0.8em;
  }
  & form {
    width: 60%;
    display: flex;

    & label {
      font-size: 1.5em;
      text-align: start;
    }
    & input {
      width: 60%;
      font-size: 0.7em;
    }
    & input[type="submit"] {
      width: 10%;
      margin-left: 50%;
    }
    & textarea {
      max-width: 60%;
      min-width: 60%;
      max-height: 300px;
      min-height: 100px;
      width: 60%;
      height: 200px;
    }
  }

  //Tablet Screen
  @media screen and (max-width: 991px) {
    & h2 {
      font-size: 1.5em;
    }

    & form {
      width: 70%;
      display: flex;

      & label {
        font-size: 1.5em;
      }
      & input {
        width: 70%;
        font-size: 1em;
      }
      & input[type="submit"] {
        width: 50%;
        margin-left: 0;
      }
      & textarea {
        max-width: 70%;
        min-width: 70%;
        max-height: 200px;
        min-height: 100px;
        width: 70%;
        height: 100px;
        font-size: 0.7em;
      }
    }
  }

  @media screen and (max-width: 700px) {
    & h2 {
      font-size: 1em;
    }
    & form {
      width: 90%;
      display: flex;

      & label {
        font-size: 1.2em;
      }
      & input {
        width: 70%;
        font-size: 0.8em;
      }
      & input[type="submit"] {
        width: 40%;
        margin-left: 0;
      }
      & textarea {
        max-width: 70%;
        min-width: 70%;
        max-height: 200px;
        min-height: 100px;
        height: 120px;
      }
    }
  } ;
`;
