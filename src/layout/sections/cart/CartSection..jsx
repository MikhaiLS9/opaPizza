// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIncreaseCount,
  setDecreaseCount,
  setClearCount,
} from "../../../redux/slices/cartSlice";

export const Goods = () => {
  const dispatch = useDispatch();
  const pizzaCart = useSelector((state) => state.cart.pizza);
  const countpizza = useSelector((state) => state.cart.count);

  const incrementCounter = (pizzaId) => {
    dispatch(setIncreaseCount(pizzaId));
    console.log(pizzaId);
  };

  const decrementtCounter = (pizzaId) => {
    dispatch(setDecreaseCount(pizzaId));
    console.log(pizzaId);
  };

  const clearCount = (pizzaId) => {
    dispatch(setClearCount(pizzaId));
    console.log(pizzaId);
  };
console.log(countpizza);
  const goodsSum = countpizza.reduce((acc, item) => acc += (item.count * item.price),0);
console.log(goodsSum);
  return (
    <StyledGoodsSection>
      {pizzaCart.length === 0 ? (
        <>
          <header>OPA PIZZA</header>
          <Line />
          <h2>Корзина пустая</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <StyledLink to="/opaPizza">Вернуться назад</StyledLink>
        </>
      ) : (
        <>
          <StyledGoods>
            {countpizza.map((item, index) => (
              <StyledGoodItem key={item.id + index}>
                <StyledImg src={item.imageUrl} alt="pizza" />
                <div>
                  <h3>{item.title}</h3>
                  <span>
                    {item.types}, {item.sizes} см.
                  </span>
                </div>
                <StyledVerificationButton
                  onClick={() => decrementtCounter(item)}
                >
                  -
                </StyledVerificationButton>
                <span>{item.count} шт.</span>
                <StyledVerificationButton
                  onClick={() => incrementCounter(item)}
                >
                  +
                </StyledVerificationButton>
                <span>{item.price * item.count} &#8381;</span>
                <StyledVerificationButton onClick={() => clearCount(item)}>
                  #
                </StyledVerificationButton>
              </StyledGoodItem>
            ))}
          </StyledGoods>
          <div>
            <h3>Сумма заказа : {goodsSum}</h3>
          </div>
          <StyledLink to="/opaPizza">Вернуться назад</StyledLink>
        </>
      )}
    </StyledGoodsSection>
  );
};

const StyledGoodsSection = styled.section`
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

const StyledLink = styled(Link)`
  background-color: black;
  color: white;
  border-radius: 15px;

  margin: 15px;
  padding: 15px;
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledGoods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const StyledGoodItem = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const StyledVerificationButton = styled.button`
  background-color: #ff9800;
  padding: 10px;
`;
