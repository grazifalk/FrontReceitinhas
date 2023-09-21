import { Sidebar } from "../../components/sidebar";
import {
  BodyContent,
  ContainerContent,
  ContainerDetails,
  ContainerImage,
  ContainerLine,
  ContainerTitle,
  ContainerTop,
  Icon,
  Picture,
  Text,
  Title,
} from "./style";
import Clock from "../../../src/assets/clockicon.svg";
import Difficulty from "../../../src/assets/difficulty.svg";
import Costs from "../../../src/assets/cost.svg";
import Delete from "../../../src/assets/delete.svg";
import Edit from "../../../src/assets/edit.svg";
import { useNavigate, useParams } from "react-router-dom";
import ApiFindById from "../../services/Api/ApiFindById";
import { useEffect, useState } from "react";
import ApiDelete from "../../services/Api/ApiDelete";
import { toast } from "react-toastify";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await ApiFindById.RecipeFindById(id);
        setRecipe(response.data);
      } catch (error) {
        console.error("Erro ao buscar a receita:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const deleteRecipe = async (id) => {
    return await ApiDelete.RecipeDelete(id);
  };

  const handleDeleteRecipe = async (id) => {
    const response = await deleteRecipe(id);

    if (response) toast.success(response.data);
    navigate(`/recipes`);
  };

  const handleUpdateRecipe = async () => {
    const recipeId = recipe.id;
    navigate(`/recipes/update/${recipeId}`);
  };

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <ContainerTop>
                <ContainerTitle>
                  <Title>{recipe.title}</Title>
                  <Icon
                    src={Edit}
                    alt="Atualizar"
                    onClick={() => handleUpdateRecipe(recipe.id)}
                  />
                  <Icon
                    src={Delete}
                    alt="Deletar"
                    onClick={() => handleDeleteRecipe(recipe.id)}
                  />
                </ContainerTitle>
                <ContainerImage>
                  <Picture src={recipe.photo} alt="Receita" />
                </ContainerImage>
              </ContainerTop>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Clock} alt="Tempo de preparo" />
                  <Text>{recipe.preparationTime}</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Difficulty} alt="Dificuldade" />
                  <Text>{recipe.difficulty}</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Costs} alt="Custos" />
                  <Text>{recipe.cost}</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Text>
                    <ul style={{ listStyle: "none" }}>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>&#8226; {ingredient}</li>
                      ))}
                    </ul>
                  </Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerDetails>
                <Text>{recipe.preparationMethod}</Text>
              </ContainerDetails>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
