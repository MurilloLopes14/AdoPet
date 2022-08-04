import styled from "styled-components";
import Patas from "../../Assets/Images/Patas.png";

export const NavBarStyle = styled.nav`
  //Desktop Screen
  background-image: url(${Patas});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100px;

  & img {
    margin: 1em 0 0.5em 2em;
    width: 250px;
    height: 80px;
  }

  & .contact-home {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & .logout {
    margin-left: 2em;
    & svg {
      cursor: pointer;
      transition: 0.4s;
    }
  }

  & .logout svg:hover {
    transform: scale(1.1);
    color: var(--link);
  }

  & svg {
    font-size: 2.5em;
    text-align: center;
    margin: 0.3em;
    color: var(--f_secondary);
  }
  & a.active svg {
    color: var(--first);
  }

  //Tablet screen
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: row;
    height: 150px;
    background-size: 180px;

    & img {
      width: 300px;
      max-height: 200px;
      margin: 1em 0 0.5em 2em;
    }

    & svg {
      font-size: 2.8em;
    }

    & .contact-home {
      margin-right: 2em;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    & .logout {
      margin-left: 1em;
    }
  }

  //Phone screen
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & img {
      display: none;
    }

    & svg {
      font-size: 1.5em;
    }

    & .contact-home {
      display: flex;
      align-items: center;
      margin-top: 0.3em;
      margin-left: 1em;
      text-align: center;
    }

    & .logout {
      margin-left: 1em;
      margin-right: -1em;
    }
  }
`;
