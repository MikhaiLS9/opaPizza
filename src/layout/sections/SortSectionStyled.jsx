import styled from "styled-components";
import { useState } from "react";
import { SortList } from "../../components/sort/SortList";

export const SortSectionStyled = (props) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <StyledNav>
      <StyledListHeader>
       
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

        <SortList />

    
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


