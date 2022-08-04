import styled from "styled-components";

import FooterLogo from "../../Assets/Images/footer_logo.png";

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12em 0 5em 0;
  padding-top: 10em;
  background-image: url(${FooterLogo});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 120px;
  background-color: linear-gradient();

  @media screen and (max-width: 991px) {
    padding-top: 15em;
    background-size: 150px;
  }

  @media screen and (max-width: 700px) {
    background-size: 80px;
    padding-top: 5em;
    margin: 10em 0 3em 0;
  }
`;
