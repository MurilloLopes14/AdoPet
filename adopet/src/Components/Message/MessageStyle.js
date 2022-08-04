import styled from "styled-components";

export const MessageStyle = styled.div`
  & div.error p {
    font-weight: 700;
    color: #df1d1d;
    padding: 0.1em 0.5em;
    background-color: #ffd1d1;
    border: 1px solid #df1d1d;
    border-radius: 8px;
  }

  & div.success p {
    font-weight: 700;
    color: #0fef13;
    padding: 0.1em 0.5em;
    background-color: #e4ffd1;
    border: 1px solid #0fef13;
    border-radius: 8px;
  }
`;
