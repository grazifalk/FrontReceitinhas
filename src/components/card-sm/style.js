import styled from "styled-components";

export const ContainerShape = styled.div`
  /* width: 420px;
height: 200px; */

  width: 300px;
  height: 180px;
  margin-bottom: 40px;
  margin-left: 20px;
  /* background: #C4EFF2; */
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

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
  line-height: 36px;
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
  margin-left: -100px;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #303030;
  margin: 10px;
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
  left: -60%;
  top: -10%;
  z-index: 1;
`;
