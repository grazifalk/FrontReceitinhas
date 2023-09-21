import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiFindById from "../../services/Api/ApiFindById";
import { FormUpdate } from "../../components/form-update";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, Title } from "./style";

const UpdateRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

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
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <Title>Atualizar receita:</Title>
              {recipe ? (
                <FormUpdate recipe={recipe} />
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
