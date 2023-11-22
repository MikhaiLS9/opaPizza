import { HeaderSectionStyled } from "../../layout/sections/HeaderSectionStyle";
import { Container } from "../../styles/Container";
export const Header = () => {
  const navigationList = ["Прямой эфир", "Работа в Опа", "О нас", "Контакты"];
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
      <div>
        <HeaderSectionStyled list={navigationList} pizzaList={pizzaList} />
      </div>
    </Container>
  );
};
