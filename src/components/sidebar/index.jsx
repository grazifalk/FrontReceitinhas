import {
  Container,
  ContainerLogo,
  Logo,
  Icons,
  ContainerMenu,
  ContainerItem,
  MenuText,
} from "./style";
import Logomarca from "../../../src/assets/logo-menu.png";
import LogomarcaContrast from "../../../src/assets/logo-menu-contrast.png";
import Home from "../../../src/assets/home.svg";
import Recipes from "../../../src/assets/recipes.svg";
import About from "../../../src/assets/about.svg";
import Create from "../../../src/assets/create.svg";
import { ImBrightnessContrast } from "react-icons/im";
import { MdOutlineTextIncrease, MdOutlineTextDecrease } from "react-icons/md";

export const Sidebar = ({
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
  return (
    <Container className="col-md-4">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "5px",
        }}
      >
        <div
          onClick={HandledarkMode}
          style={{ cursor: "pointer" }}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              HandledarkMode();
            }
          }}
        >
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
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              increaseFontSize();
            }
          }}
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
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              decreaseFontSize();
            }
          }}
        >
          <MdOutlineTextDecrease
            title="Diminuir Fonte"
            size={24}
            color="var(--preto)"
          />
        </div>
      </div>
      <ContainerLogo>
        {checar ? (
          <Logo src={LogomarcaContrast} alt="Receitinhas" />
        ) : (
          <Logo src={Logomarca} alt="Receitinhas" />
        )}
      </ContainerLogo>
      <ContainerMenu>
        <ContainerItem>
          <Icons src={Home} alt="Home" />
          <MenuText to="/">Home</MenuText>
        </ContainerItem>
        <ContainerItem>
          <Icons src={Recipes} alt="Receitas" />
          <MenuText to={"/recipes"}>Receitas</MenuText>
        </ContainerItem>
        <ContainerItem>
          <Icons src={Create} alt="Criar Receita" />
          <MenuText to={"/create"}>Criar Receita</MenuText>
        </ContainerItem>
        <ContainerItem>
          <Icons src={About} alt="Sobre" />
          <MenuText to={"/about"}>Sobre</MenuText>
        </ContainerItem>
      </ContainerMenu>
    </Container>
  );
};
