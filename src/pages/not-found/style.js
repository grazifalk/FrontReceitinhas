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

export const Title = styled.p`
  font-family: "Jacques Francois Shadow";
  font-weight: 400;
  font-size: 40px;
  line-height: 53px;
  color: #303030;
`;

export const Picture = styled.img`
  height: 85%;
`;
