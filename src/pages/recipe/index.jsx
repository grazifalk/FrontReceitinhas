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
import { SidebarMobile } from "../../components/sidebar-mobile";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  function getWindowSize() {
    return window.screen.width;
  }

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
      {windowSize < 801 ? <SidebarMobile /> : null}
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            {windowSize > 800 ? <Sidebar /> : null}
            <BodyContent>
              <ContainerTop>
                <ContainerTitle>
                  <Title>{recipe.title}</Title>
                  <Icon
                    src={Edit}
                    alt="Atualizar"
                    onClick={() => handleUpdateRecipe(recipe.id)}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleUpdateRecipe(recipe.id);
                      }
                    }}
                  />
                  <Icon
                    src={Delete}
                    alt="Deletar"
                    onClick={() => handleDeleteRecipe(recipe.id)}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleDeleteRecipe(recipe.id);
                      }
                    }}
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
