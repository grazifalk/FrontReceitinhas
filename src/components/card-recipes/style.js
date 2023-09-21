import styled from "styled-components";

export const ContainerShape = styled.div`
  width: 57vw;
  /* height: 22vh; */
  margin-top: 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

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
  display: flex;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  display: flex;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #303030;
  margin-right: 20px;
`;

export const ContainerPhoto = styled.div`
  width: 157px;
  height: 157px;
  position: relative;
`;

export const Picture = styled.img`
  width: 125px;
  height: 127px;
  position: absolute;
  left: -35%;
  top: -5%;
  z-index: 1;
  border-radius: 50%;
`;
