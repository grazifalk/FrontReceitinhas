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
import Home from "../../../src/assets/home.svg";
import Recipes from "../../../src/assets/recipes.svg";
import About from "../../../src/assets/about.svg";
import Create from "../../../src/assets/create.svg";

export const Sidebar = () => {
  return (
    <Container className="col-md-4">
      <ContainerLogo>
        <Logo src={Logomarca} alt="Receitinhas" />
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
      <div>
        <MenuText to={"/notfound"}>404</MenuText>
        <MenuText to={"/recipe"}>Receita</MenuText>
        Plaquinhas
      </div>
    </Container>
  );
};
