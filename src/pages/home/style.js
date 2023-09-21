import styled from "styled-components";

export const BodyContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 30px;
  background: #bbdac7;

  width: 100%;
  max-height: 90vh;

  overflow-y: auto;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
 // position: absolute; /* Adicione o posicionamento absoluto */
 // top: 360px; /* Defina a distância desejada do rodapé */
 // z-index: 2;
`;
