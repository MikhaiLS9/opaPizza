import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectSize,
  setAddPizzas,
  setSelectTypes,
  setIncreaseCount,
} from "../../redux/slices/cartSlice";

export const MainSectionStyled = (props) => {
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);

  const dispatch = useDispatch();

  const pizzaTypes = ["традиционное", "тонкое"];

  const selectedActivePizzaList = useSelector(
    (state) => state.filter.categoryId
  );
  const selected = useSelector((state) => state.filter.sort.sortProperty);

  const filteredPizzas = props.pizzas
    .filter((pizza) => pizza.sort.includes(selectedActivePizzaList))
    .sort((a, b) => {
      if (a[selected] > b[selected]) {
        return -1;
      }
      if (a[selected] < b[selected]) {
        return 1;
      }
      return 0;
    });

  const addCart = (e, i, type) => {
    const pizzaSizeKey = Object.values(activeSizes);
    const pizzaTypesKey = Object.values(activeTypes);
    const pizzaItem = {
      id: type[i].id,
      title: type[i].title,
      imageUrl: type[i].imageUrl,
      sizes: type[i].sizes[pizzaSizeKey],
      types: pizzaTypes[pizzaTypesKey],
      price: type[i].price,
    };
    dispatch(setSelectSize(activeSizes));
    dispatch(setSelectTypes(activeTypes));
    dispatch(setAddPizzas(pizzaItem));
    dispatch(setIncreaseCount(pizzaItem));
  };

  return (
    <StyledSectionBlock>
      {filteredPizzas.map((pizza, index, type) => (
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
            <AddPizzaButton onClick={(e) => addCart(e, index, type)}>
              Добавить
            </AddPizzaButton>
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
  text-align: center;

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
  border: 3px solid #ff9800;
  border-radius: 25px;

  margin-top: 5px;
  padding: 10px;
`;
