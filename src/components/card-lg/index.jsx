import {
  Container,
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

export const CardLarge = ({ recipe }) => {
  const navigate = useNavigate();

  const handleRecipeSelected = async () => {
    const recipeId = recipe.id;
    navigate(`/Recipe/${recipeId}`);
  };

  if (!recipe) {
    return <div>Carregando receita...</div>;
  }

  return (
    <>
      <Container
        onClick={() => handleRecipeSelected()}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleRecipeSelected();
          }
        }}
      >
        <Title>{recipe.title}</Title>
        <ContainerItems>
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
          <ContainerPhoto>
            <Picture src={recipe.photo} alt={`${recipe.title}`} />
          </ContainerPhoto>
        </ContainerItems>
      </Container>
    </>
  );
};
