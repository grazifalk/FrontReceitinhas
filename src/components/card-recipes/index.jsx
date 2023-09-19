import {
  ContainerShape,
  Title,
  ContainerDescription,
  ContainerLine,
  Icon,
  Text,
  ContainerPhoto,
  Picture,
  ContainerItems,
} from "./style";
import Photo from "../../../src/assets/examplerecipe.png";
import Clock from "../../../src/assets/clockicon.svg";
import Dificulty from "../../../src/assets/dificulty.svg";
import Cost from "../../../src/assets/cost.svg";

export const CardRecipes = () => {
  return (
    <>
      <ContainerShape>
        <Title>Título da Receita</Title>
        <ContainerItems>
          <ContainerPhoto>
            <Picture src={Photo} alt="Foto da receita" />
          </ContainerPhoto>
          <ContainerDescription>
            <ContainerLine>
              <Icon src={Clock} alt="Tempo de preparo" />
              <Text>Tempo de Preparo</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Dificulty} alt="Dificuldade" />
              <Text>Dificuldade</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Cost} alt="Custo" />
              <Text>Valor</Text>
            </ContainerLine>
          </ContainerDescription>
        </ContainerItems>
      </ContainerShape>
    </>
  );
};
