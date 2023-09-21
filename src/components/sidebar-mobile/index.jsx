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
import LogomarcaContrast from "../../../src/assets/logo-menu-contrast.png";
import Home from "../../../src/assets/home.svg";
import Recipes from "../../../src/assets/recipes.svg";
import About from "../../../src/assets/about.svg";
import Create from "../../../src/assets/create.svg";
import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import { ImBrightnessContrast } from "react-icons/im";
import { MdOutlineTextDecrease, MdOutlineTextIncrease } from "react-icons/md";

export const SidebarMobile = ({
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileContainer>
        <MobileMenuButton onClick={toggleSidebar}>
          <LuMenuSquare size={26} alt="Menu" color="var(--preto)" />
        </MobileMenuButton>
        {checar ? (
          <Logo src={LogomarcaContrast} alt="Receitinhas" />
        ) : (
          <Logo src={Logomarca} alt="Receitinhas" />
        )}
      </MobileContainer>
      <MobileSidebar isOpen={isOpen}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "5px",
          }}
        >
          <div onClick={HandledarkMode} style={{ cursor: "pointer" }}>
            <ImBrightnessContrast
              title="Alto Contraste"
              size={28}
              color="var(--preto)"
            />
          </div>
          <div
            className="area-icons-label"
            onClick={increaseFontSize}
            style={{ cursor: "pointer" }}
          >
            <MdOutlineTextIncrease
              title="Aumentar Fonte"
              size={28}
              color="var(--preto)"
            />
          </div>
          <div
            className="area-icons-label"
            onClick={decreaseFontSize}
            style={{ cursor: "pointer" }}
          >
            <MdOutlineTextDecrease
              title="Diminuir Fonte"
              size={24}
              color="var(--preto)"
            />
          </div>
        </div>
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
          <CgCloseR size={18} color="var(--preto)" />
          <SidebarText style={{ marginLeft: "10px" }}>Fechar</SidebarText>
        </MobileSidebarItem>
      </MobileSidebar>
    </>
  );
};
