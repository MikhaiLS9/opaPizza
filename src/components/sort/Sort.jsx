import { SortSectionStyled } from "../../layout/sections/SortSectionStyled";
import { Container } from "../../styles/Container";



const Sort = () => {
  const pizzaList = [
    "Все",
    "Мясная",
    "Вегетарианская",
    "Гриль",
    "Острая",
    "Закрытая",
  ];
  return (
    <Container>
      <SortSectionStyled pizzaList={pizzaList} />
    </Container>
  );
};

export default Sort;
