import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-shadow: 10px 10px 24px rgba(204, 203, 203, 0.25);
  border-radius: 30px;
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const MobileSidebar = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 50;
  left: 0;
  width: 40%;
  height: 100%;
  background-color: white;
  z-index: 999;
`;

export const MobileSidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const SidebarText = styled(Link)`
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #303030;
`;

export const Logo = styled.img`
  width: 210px;
  height: 48px;
`;
