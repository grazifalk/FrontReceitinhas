import styled from "styled-components";

export const ButtonStyle = styled.div`
  .button {
    width: ${(props) => props.size} !important;
    background-color: ${(props) => props.bgColor} !important;
    color: ${(props) => props.textColor} !important;
    border: none !important;
    transition: 0.3s;

    font-family: "Katibeh";
    font-weight: 400;
    line-height: 25px;
    font-size: 36px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    padding: 10px 10px 20px 10px;

    &:hover {
      filter: brightness(0.8);
    }
    &:focus {
      filter: brightness(0.8);
    }
  }
`;
