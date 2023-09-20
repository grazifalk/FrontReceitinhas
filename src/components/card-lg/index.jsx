import {
  Container,
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
import Difficulty from "../../../src/assets/difficulty.svg";
import Cost from "../../../src/assets/cost.svg";

export const CardLarge = () => {
  return (
    <>
      <Container>
        <Title>Título da Receita</Title>
        <ContainerItems>
          <ContainerDescription>
            <ContainerLine>
              <Icon src={Clock} alt="Tempo de preparo" />
              <Text>Tempo de Preparo</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Difficulty} alt="Dificuldade" />
              <Text>Dificuldade</Text>
            </ContainerLine>
            <ContainerLine>
              <Icon src={Cost} alt="Custo" />
              <Text>Valor</Text>
            </ContainerLine>
          </ContainerDescription>
          <ContainerPhoto>
            <Picture src={Photo} alt="Foto da receita" />
          </ContainerPhoto>
        </ContainerItems>
      </Container>
    </>
  );
};
