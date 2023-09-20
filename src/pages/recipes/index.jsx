import { useEffect, useState } from "react";
import { CardRecipes } from "../../components/card-recipes";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, ContainerCards } from "./style";
import ApiFindAll from "../../services/Api/ApiFindAll";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState(null);

  const FindAll = async () => {
    const res = await ApiFindAll.RecipesFindAll();
    let list = res.data.data;
    setRecipes(list);
  };

  useEffect(() => {
    FindAll();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <ContainerCards>
                {recipes.length > 0 ? (
                  recipes
                    .sort((a, b) =>
                      a.title.toUpperCase().localeCompare(b.title.toUpperCase())
                    )
                    .map((recipe) => {
                      return (
                        <CardRecipes
                          key={recipe.id}
                          recipe={recipe}
                          setRecipeSelected={setRecipeSelected}
                        />
                      );
                    })
                ) : (
                  <p>Loading recipes...</p>
                )}
              </ContainerCards>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
