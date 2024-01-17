import styled from "styled-components";
import { useState } from "react";
import { SortList } from "../../components/sort/SortList";

import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import { theme } from "../../styles/theme";

export const SortSectionStyled = (props) => {
  const [activeLink, setActiveLink] = useState(0);

  const dispatch = useDispatch();

  const handleCategoryClick = (index) => {
    setActiveLink(index);
    const categoryPizzaList = props.pizzaList[index];

    dispatch(setCategoryId(categoryPizzaList));
  };

  return (
    <StyledNav>
      <StyledPizzaList>
        {props.pizzaList.map((categoryName, index) => (
          <StyledPizzaListElements key={index + 1}>
            <StyledLinkPizza
              className={activeLink === index ? "activePizzaList" : ""}
              onClick={() => handleCategoryClick(index)}
              href="#!"
            >
              {categoryName}
            </StyledLinkPizza>
          </StyledPizzaListElements>
        ))}

        <SortList />
      </StyledPizzaList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 10px;

  
`;

const StyledPizzaList = styled.ul`
  display: flex;

  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;

  @media (max-width: 850px) {
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 15px;
    gap: 20px;
    padding: 5px;

    
    width: 291px;
    height: 500px;
  }
`;

const StyledPizzaListElements = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinkPizza = styled.a`
  text-align: center;
  border: 2px solid black;
  border-radius: 25px;
  padding: 10px;

  min-width: 138px;

  color: ${(props) =>
    props.className === "activePizzaList" ? theme.secondColor : theme.thirdColor};
  background-color: ${(props) =>
    props.className === "activePizzaList" ? theme.thirdColor : "transparent"};
`;
