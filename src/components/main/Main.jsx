import { MainSectionStyled } from "../../layout/sections/MainSectionStyled";
import pizzaData from "../../assets/pizzas.json";
import { Container } from "../../styles/Container";

export const Main = () => {
  return (
    <Container>
      <MainSectionStyled pizzas={pizzaData} />
    </Container>
  );
};
