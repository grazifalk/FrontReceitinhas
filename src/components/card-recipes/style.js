import styled from "styled-components";

export const ContainerShape = styled.div`
  width: 57vw;
  height: 22vh;
  margin-top: 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:nth-child(odd) {
    background-color: #c4eff2;
  }

  &:nth-child(even) {
    background-color: #ffe9a7;
  }
`;

export const Title = styled.h1`
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 30px;
  color: #303030;
  padding-top: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
`;

export const ContainerDescription = styled.div``;

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #303030;
`;

export const ContainerPhoto = styled.div`
  width: 157px;
  height: 157px;
  position: relative;
`;

export const Picture = styled.img`
  width: 149px;
  height: 151px;
  position: absolute;
  left: -210%;
  top: -15%;
  z-index: 1;
`;
