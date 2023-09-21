import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiFindById from "../../services/Api/ApiFindById";
import { FormUpdate } from "../../components/form-update";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, Title } from "./style";
import { SidebarMobile } from "../../components/sidebar-mobile";

const UpdateRecipe = ({
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
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
              <Title>Atualizar receita:</Title>
              {recipe ? (
                <FormUpdate
                  recipe={recipe}
                  increaseFontSize={increaseFontSize}
                  decreaseFontSize={decreaseFontSize}
                  checar={checar}
                  HandledarkMode={HandledarkMode}
                />
              ) : (
                <div>Carregando...</div>
              )}
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRecipe;
