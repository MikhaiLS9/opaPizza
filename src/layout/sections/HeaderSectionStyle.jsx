import styled from "styled-components";
import { useState } from "react";
import { Sort } from "../../components/header/HeaderSprt";

export const HeaderSectionStyled = (props) => {
  const [activeLink, setActiveLink] = useState(0);

  console.log(activeLink);
  return (
    <StyledNav>
      <StyledListHeader>
        {props.list.map((item, index) => (
          <li key={index + 1}>
            <a href="#!">{item}</a>
          </li>
        ))}
      </StyledListHeader>
      <div></div>
      <StyledPizzaList>
        {props.pizzaList.map((item, index) => (
          <li key={index + 1}>
            <StyledLinkPizza
              className={activeLink === index ? "activePizzaList" : ""}
              onClick={() => setActiveLink(index)}
              href="#!"
            >
              {item}
            </StyledLinkPizza>
          </li>
        ))}
        <Sort/>
        <StyledCart>Корзина</StyledCart>

      </StyledPizzaList>
      
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledListHeader = styled.ul``;

const StyledPizzaList = styled.ul`
  display: flex;

  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;
`;

const StyledLinkPizza = styled.a`
  border: 2px solid black;
  border-radius: 25px;
  padding: 10px;

  color: ${(props) =>
    props.className === "activePizzaList" ? "white" : "black"};
  background-color: ${(props) =>
    props.className === "activePizzaList" ? "black" : "transparent"};
`;

const StyledCart = styled.button`
  border: 5px solid #ff9800;
  border-radius: 25px;
  padding: 10px;

  color: black;
  font-weight: bold;
`;
