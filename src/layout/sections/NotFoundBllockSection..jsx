import styled from "styled-components";

export const NotFoundBlockSection = (props) => {
  return (
    <StyledNotFoundBlockSection>
      <header> OPA PIZZA</header>
      <Line />
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <Link href="/">Вернуться назад</Link>
    </StyledNotFoundBlockSection>
  );
};

const StyledNotFoundBlockSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Line = styled.hr`
  margin: 10px;

  width: 100%;
`;

const Link = styled.a`
  background-color: black;
  color: white;
  border-radius: 15px;

  margin: 15px;
  padding: 15px;
`;
