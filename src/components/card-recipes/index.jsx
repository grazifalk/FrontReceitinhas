import {
  ContainerShape,
  Title,
  ContainerDescription,
  ContainerLine,
  Icon,
  Text,
  ContainerPhoto,
  Picture,
  ContainerItems,
} from "./style";
import Clock from "../../../src/assets/clockicon.svg";
import Difficulty from "../../../src/assets/difficulty.svg";
import Cost from "../../../src/assets/cost.svg";
import { useNavigate } from "react-router-dom";

export const CardRecipes = ({ recipe }) => {
  const navigate = useNavigate();

  const handleRecipeSelected = async () => {
    const recipeId = recipe.id;
    navigate(`/Recipe/${recipeId}`);
  };

  return (
    <>
      <ContainerShape onClick={() => handleRecipeSelected()}>
        <Title>{recipe.title}</Title>
        <ContainerItems>
          <ContainerPhoto>
            <Picture src={recipe.photo} alt={`Foto de ${recipe.title}`} />
          </ContainerPhoto>
          <ContainerDescription>
            <ContainerLine>
              <Icon src={Clock} alt="Tempo de preparo" />
              <Text>{recipe.preparationTime}</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Difficulty} alt="Dificuldade" />
              <Text>{recipe.difficulty}</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Cost} alt="Custo" />
              <Text>{recipe.cost}</Text>
            </ContainerLine>
          </ContainerDescription>
        </ContainerItems>
      </ContainerShape>
    </>
  );
};
