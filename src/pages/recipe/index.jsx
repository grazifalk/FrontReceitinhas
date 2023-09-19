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
import Dificulty from "../../../src/assets/dificulty.svg";
import Costs from "../../../src/assets/cost.svg";
import Delete from "../../../src/assets/delete.svg";
import Edit from "../../../src/assets/edit.svg";
import Photo from "../../../src/assets/examplerecipe.png";

export const Recipe = () => {
  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <ContainerTop>
                <ContainerTitle>
                  <Title>Nome da Receita</Title>
                  <Icon src={Edit} alt="Atualizar" />
                  <Icon src={Delete} alt="Deletar" />
                </ContainerTitle>
                <ContainerImage>
                  <Picture src={Photo} alt="Receita" />
                </ContainerImage>
              </ContainerTop>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Clock} alt="Tempo de preparo" />
                  <Text>Tempo de Preparo</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Dificulty} alt="Dificuldade" />
                  <Text>Dificuldade</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Icon src={Costs} alt="Custos" />
                  <Text>Custos</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerContent>
                <ContainerLine>
                  <Text>Ingredientes</Text>
                </ContainerLine>
              </ContainerContent>
              <ContainerDetails>
                <Text>
                  Modo de Preparo: Untar a forma. Colocar a massa. Levar ao
                  forno. Desenformar. Servir. Modo de Preparo: Untar a forma.
                  Colocar a massa. Levar ao forno. Desenformar. Servir.Modo de
                  Preparo: Untar a forma. Colocar a massa. Levar ao forno.
                  Desenformar. Servir.Modo de Preparo: Untar a forma. Colocar a
                  massa. Levar ao forno. Desenformar. Servir.Modo de Preparo:
                  Untar a forma. Colocar a massa. Levar ao forno. Desenformar.
                  Servir.
                </Text>
              </ContainerDetails>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
