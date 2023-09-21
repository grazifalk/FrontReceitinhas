import styled from "styled-components";

export const Container = styled.div`
  width: 540px;
  height: 400px;
  background-color: #ffece1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  color: #303030;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #303030;
  padding-left: 10px;
`;

export const ContainerPhoto = styled.div`

`;

export const Picture = styled.img`
width: 190px;
  height: 190px;
  border-radius: 50%;
`;
