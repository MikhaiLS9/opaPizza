import { HeaderNavSectionStyled } from "../../layout/sections/header/HeaderNavSectionStyled";
import { Container } from "../../styles/Container";

export const Header = () => {
  const navigationList = ["Прямой эфир", "Работа в Опа", "О нас", "Контакты"];
  return (
    <Container>
      <HeaderNavSectionStyled list={navigationList} />
    </Container>
  );
};
