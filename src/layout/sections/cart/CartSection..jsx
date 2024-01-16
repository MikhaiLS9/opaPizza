// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../../../ImgPizza/free-icon-font-minus-small-3917160.png";
import iconPlus from "../../../ImgPizza/free-icon-font-plus-small-3917179.png";
import iconBasket from "../../../ImgPizza/free-icon-font-trash-3917378.png";
import iconCoins from "../../../ImgPizza/free-icon-font-coins-7928197.png";
import iconCart from "../../../ImgPizza/free-icon-font-shopping-cart-3916630.png";

import {
  setIncreasePizza,
  setDecreasePizza,
  setClearItemPizza,
  setClearCart,
} from "../../../redux/slices/cartSlice";
export const Goods = () => {
  const dispatch = useDispatch();
  const setPizza = useSelector((state) => state.cart.pizza);
  console.log(setPizza);

  const goodsSum = setPizza.reduce(
    (acc, item) => (acc += item.count * item.price),
    0
  );

  const incrementCounter = (pizzaId) => {
    console.log(pizzaId);
    dispatch(setIncreasePizza(pizzaId));
  };

  const decrementtCounter = (pizzaId) => {
    dispatch(setDecreasePizza(pizzaId));
  };

  const ClearItemPizza = (pizzaId) => {
    dispatch(setClearItemPizza(pizzaId));
  };

  const clearCount = () => {
    dispatch(setClearCart());
  };

  return (
    <StyledGoodsSection>
      {setPizza.length === 0 ? (
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
            <button onClick={clearCount}>
              <StyledTextSpan>
                Очистить корзину
                <img src={iconCart} alt="" />
              </StyledTextSpan>
            </button>
            {setPizza.map((item, index) => (
              <StyledGoodItem key={item.id + index}>
                <StyledImg src={item.imageUrl} alt="pizza" />
                <div>
                  <h3>{item.title}</h3>
                  <StyledTextSpan>
                    {item.types}, {item.sizes} см.
                  </StyledTextSpan>
                </div>
                <StyledVerificationButton
                  onClick={() => decrementtCounter(item)}
                >
                  <img src={iconMinus} alt="Minus" />
                </StyledVerificationButton>
                <StyledTextSpan>{item.count} шт.</StyledTextSpan>
                <StyledVerificationButton
                  onClick={() => incrementCounter(item)}
                >
                  <img src={iconPlus} alt="Plus" />
                </StyledVerificationButton>
                <StyledTextSpan>
                  {item.price * item.count} &#8381;
                </StyledTextSpan>
                <StyledVerificationButton onClick={() => ClearItemPizza(item)}>
                  <img src={iconBasket} alt="Basket" />
                </StyledVerificationButton>
              </StyledGoodItem>
            ))}
          </StyledGoods>
          <div>
            <StyledTextSpan>
              Сумма заказа : {goodsSum}
              <img src={iconCoins} alt="Coins" />
            </StyledTextSpan>
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

  border: 1px solid red;
  border-radius: 25px;
  padding: 10px;
`;

const StyledVerificationButton = styled.button`
  padding: 12px;
`;

const StyledTextSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;

  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
