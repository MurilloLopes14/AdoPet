import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & h1 {
    font-size: 1.2em;
  }
  & form {
    & .submit {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  //Phone screen
  @media screen and (max-width: 700px) {
    & img {
      max-width: 200px;
      max-height: 200px;
    }

    & form {
      & .submit {
        justify-content: center;
      }
    }
  }
`;
