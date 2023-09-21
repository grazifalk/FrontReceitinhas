import {
  Icons,
  Logo,
  MobileContainer,
  MobileMenuButton,
  MobileSidebar,
  MobileSidebarItem,
  SidebarText,
} from "./style";
import Logomarca from "../../../src/assets/logo-menu.png";
import Home from "../../../src/assets/home.svg";
import Recipes from "../../../src/assets/recipes.svg";
import About from "../../../src/assets/about.svg";
import Create from "../../../src/assets/create.svg";
import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

export const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileContainer>
        <MobileMenuButton onClick={toggleSidebar}>
          <LuMenuSquare size={26} alt="Menu" />
        </MobileMenuButton>
        <Logo src={Logomarca} alt="Receitinhas" />
      </MobileContainer>
      <MobileSidebar isOpen={isOpen}>
        <MobileSidebarItem>
          <Icons src={Home} alt="Home" />
          <SidebarText to="/">Home</SidebarText>
        </MobileSidebarItem>
        <MobileSidebarItem>
          <Icons src={Recipes} alt="Receitas" />
          <SidebarText to={"/recipes"}>Receitas</SidebarText>
        </MobileSidebarItem>
        <MobileSidebarItem>
          <Icons src={Create} alt="Criar Receita" />
          <SidebarText to={"/create"}>Criar Receita</SidebarText>
        </MobileSidebarItem>
        <MobileSidebarItem>
          <Icons src={About} alt="Sobre" />
          <SidebarText to={"/about"}>Sobre</SidebarText>
        </MobileSidebarItem>
        <MobileSidebarItem onClick={toggleSidebar}>
          <CgCloseR size={18} />
          <SidebarText style={{ marginLeft: "10px" }}>Fechar</SidebarText>
        </MobileSidebarItem>
      </MobileSidebar>
    </>
  );
};
