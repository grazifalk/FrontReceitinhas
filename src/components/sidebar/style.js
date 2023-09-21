import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
  height: 100%;

  background: rgba(255, 255, 255, 0.3);
  border: 1px solid var(--branco);
  box-shadow: 10px 10px 24px rgba(204, 203, 203, 0.25);
  border-radius: 30px;

  align-items: left;
  margin-right: 20px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 210px;
  height: 48px;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
  justify-content: center;
  margin-top: 5px;
`;

export const MenuText = styled(Link)`
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* color: #303030; */
  color: var(--preto);
  margin: 5px;
  margin-left: 10px;
  justify-content: center;
`;
