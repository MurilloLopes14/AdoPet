import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    & img {
      max-width: 200px;
      max-height: 200px;
    }

    & h1 {
      font-size: 1.5em;
      font-weight: 800;
    }

    & p {
      text-align: center;
      font-weight: 600;
      font-family: var(--kantumruy);
      color: var(--f_primary);
      font-size: 1.1em;
    }

    & .routes {
      margin-top: 1em;
    }

    & h2 {
      font-size: 0.9em;
      text-align: center;
    }
  }
`;
