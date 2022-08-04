import styled from "styled-components";

export const GalleryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  & h1 {
    text-align: center;
    font-size: 3em;
  }

  & h3 {
    font-size: 1.4em;
    border-bottom: 1px solid var(--second);
    width: 100%;
  }

  & p {
    font-size: 0.9em;
  }

  & a svg {
    color: var(--bg_terciary);
  }

  & span {
    font-size: 1.1em;
  }

  & .pets {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  & .pet-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;

    & li {
      width: 100%;
      height: 550px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style: none;
      margin: 2em 1em;
      padding: 1em 3em;
      border: 2px solid var(--bg_terciary);
      border-radius: 10px;
      box-shadow: 0 0 10px 1px var(--bg_terciary),
        inset 0 0 10px 1px var(--bg_terciary);
    }
    & img {
      width: 200px;
      height: 200px;
    }
  }

  //Tablet screen
  @media screen and (max-width: 991px) {
    & .pet-container {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;

      & li {
        width: 90%;
        height: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        list-style: none;
        margin: 2em 1em;
        padding: 1em 3em;
        border: 2px solid var(--bg_terciary);
        border-radius: 10px;
        box-shadow: 0 0 10px 1px var(--bg_terciary),
          inset 0 0 10px 1px var(--bg_terciary);
      }

      & img {
        width: 200px;
        height: 200px;
      }

      & h3 {
        font-size: 2.5em;
      }

      & p {
        font-size: 1.05em;
      }
    }
  }

  //Phone screen
  @media screen and (max-width: 700px) {
    & .pet-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & li {
        width: 70%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        list-style: none;
        margin: 2em 1em;
        padding: 1em 3em;
        border: 2px solid var(--bg_terciary);
        border-radius: 10px;
        box-shadow: 0 0 10px 1px var(--bg_terciary),
          inset 0 0 10px 1px var(--bg_terciary);
      }

      & img {
        max-width: 100px;
        max-height: 100px;
      }

      & h3 {
        font-size: 1.4em;
        border-bottom: 1px solid var(--second);
        width: 100%;
      }

      & p {
        font-size: 0.9em;
      }

      & span {
        font-size: 0.9em;
      }
    }
  }
`;
