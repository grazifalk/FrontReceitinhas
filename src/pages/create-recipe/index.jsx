import { FormCreate } from "../../components/form-create";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, Title } from "./style";

export const CreateRecipe = () => {
  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
            <Title>Enviar uma nova receita:</Title>
              <FormCreate />              
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
