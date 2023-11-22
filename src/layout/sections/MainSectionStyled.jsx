import styled from "styled-components";
import React, { useState } from "react";
export const MainSectionStyled = (props) => {
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [addPizza, setAddPizza] = useState(0);

  const pizzaTypes = ["традиционное", "тонкое"];
  return (
    <StyledSectionBlock>
      {props.pizzas.map((pizza) => (
        <StyledPizzaBlock key={pizza.id}>
          <StyledImg src={pizza.imageUrl} alt="Pizza" />
          <PizzaName>{pizza.title}</PizzaName>
          <StyledPizzaSelection>
            <StyledPizzaTypesBlock>
              {pizza.types.map((types) => (
                <React.Fragment key={types}>
                  <input type="checkbox" id={`${types}-${pizza.id}`} />
                  <StyledPizzaTypeLabel
                    className={
                      activeTypes[pizza.id] === types ? "activeType" : ""
                    }
                    onClick={() =>
                      setActiveTypes((prevState) => ({
                        ...prevState,
                        [pizza.id]: types,
                      }))
                    }
                    htmlFor={`${types}-${pizza.id}`}
                  >
                    {pizzaTypes[types]}
                  </StyledPizzaTypeLabel>
                </React.Fragment>
              ))}
            </StyledPizzaTypesBlock>

            <StyledPizzaSizeBlock>
              {pizza.sizes.map((size, i) => (
                <React.Fragment key={size}>
                  <input type="checkbox" id={`${size}-${pizza.id}`} />
                  <StyledPizzaSizeLabel
                    htmlFor={`${size}-${pizza.id}`}
                    className={activeSizes[pizza.id] === i ? "activeSize" : ""}
                    onClick={() =>
                      setActiveSizes((prevState) => ({
                        ...prevState,
                        [pizza.id]: i,
                      }))
                    }
                  >
                    {size} см.
                  </StyledPizzaSizeLabel>
                </React.Fragment>
              ))}
            </StyledPizzaSizeBlock>
          </StyledPizzaSelection>
          <StyledPriceBlock>
            <p>от {pizza.price} &#8381;</p>
            <AddPizzaButton onClick={() => setAddPizza(addPizza + 1)}>Добавить {addPizza}</AddPizzaButton>
          </StyledPriceBlock>
        </StyledPizzaBlock>
      ))}
    </StyledSectionBlock>
  );
};

const StyledSectionBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledPizzaBlock = styled.div`
  width: 292px;
  height: 100%;
`;

const PizzaName = styled.h3`
  margin-bottom: 5px;
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

const StyledPizzaSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: #746a6a2e;
  border-radius: 15px;
`;
const StyledPizzaTypesBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledPizzaTypeLabel = styled.label`
  background-color: ${(props) =>
    props.className === "activeType" ? "white" : "transparent"};
  border-radius: 10px;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
`;

const StyledPizzaSizeBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledPizzaSizeLabel = styled.label`
  background-color: ${(props) =>
    props.className === "activeSize" ? "white" : "transparent"};
  border-radius: 10px;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
`;

const StyledPriceBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 100px;
  width: 100%;

  font-size: 23px;
`;

const AddPizzaButton = styled.button`

`
