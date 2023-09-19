import { Sidebar } from "../../components/sidebar";
import { BodyContent, Picture, Title } from "./style";
import Photo from "../../../src/assets/404grazi.png";

export const NotFound = () => {
  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <Title>404 - Página não encontrada!</Title>
              <Picture src={Photo} alt="Página não encontrada" />
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
