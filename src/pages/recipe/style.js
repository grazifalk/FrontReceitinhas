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

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: start;
  padding: 0 50px;
`;

export const Title = styled.p`
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  color: #303030;
  padding-right: 20px;
`;

export const ContainerContent = styled.div`
  align-self: start;
  padding: 0 50px;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #303030;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ContainerImage = styled.div`
  /* display: flex;
flex-direction: row;
align-self: self-end; */
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerTop = styled.div`
  display: flex;
  padding-top: 10px;
  /* align-self: start; */
`;
