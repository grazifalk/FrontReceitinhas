import { Sidebar } from "../../components/sidebar";
import "./style.css";
import Banner from "../../../src/assets/newbanner.png";
import BannerContrast from "../../../src/assets/bannerContrast.png";
import { BodyContent, ContainerCards } from "./style";
import { CardLarge } from "../../components/card-lg";
import { CardSmall } from "../../components/card-sm";
import { useEffect, useState } from "react";
import { SidebarMobile } from "../../components/sidebar-mobile";
import ApiFindAll from "../../services/Api/ApiFindAll";

export const Home = ({
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [recipes, setRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  function getWindowSize() {
    return window.screen.width;
  }

  const FindAll = async () => {
    const res = await ApiFindAll.RecipesFindAll();
    let list = res.data.data;
    setRecipes(list);
    setFilteredRecipes(list);
  };

  const findAllCategories = async () => {
    const res = await ApiFindAll.CategoriesFindAll();
    let list = res.data.data;
    setCategories(list);
  };

  useEffect(() => {
    FindAll();
    findAllCategories();
  }, []);

  const selectRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  };

  const randomRecipe1 = selectRandomRecipe();
  const randomRecipe2 = selectRandomRecipe();
  const randomRecipe3 = selectRandomRecipe();

  return (
    <>
      {windowSize < 801 ? (
        <SidebarMobile
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          checar={checar}
          HandledarkMode={HandledarkMode}
        />
      ) : null}
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            {windowSize > 800 ? (
              <Sidebar
                increaseFontSize={increaseFontSize}
                decreaseFontSize={decreaseFontSize}
                checar={checar}
                HandledarkMode={HandledarkMode}
              />
            ) : null}
            <BodyContent>
              {checar ? (
                <img
                  src={BannerContrast}
                  alt="Receitinhas by Grazi Falk"
                  className="banner-image"
                />
              ) : (
                <img
                  src={Banner}
                  alt="Receitinhas by Grazi Falk"
                  className="banner-image"
                />
              )}
              <ContainerCards>
                <div>
                  <CardLarge
                    recipe={randomRecipe1}
                    setRecipeSelected={setRecipeSelected}
                  />
                </div>
                <div>
                  <CardSmall
                    recipe={randomRecipe2}
                    setRecipeSelected={setRecipeSelected}
                  />
                  <CardSmall
                    recipe={randomRecipe3}
                    setRecipeSelected={setRecipeSelected}
                  />
                </div>
              </ContainerCards>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
