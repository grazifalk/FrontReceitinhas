import { CardRecipes } from "../../components/card-recipes";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, ContainerCards } from "./style";

export const Recipes = () => {
  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <ContainerCards>
                <CardRecipes />
                <CardRecipes />
                <CardRecipes />
                <CardRecipes />
              </ContainerCards>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
