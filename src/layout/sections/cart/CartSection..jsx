import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Goods = () => {
  const pizzaTypes = ["традиционное", "тонкое"];
  const pizzaCart = useSelector((state) => state.cart.pizza);
  console.log(pizzaCart.map((item) => item.price));
  const goodsSum = pizzaCart.reduce((acc, item) => acc + item.price, 0);
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
            {pizzaCart.map((item) => (
              <StyledGoodItem key={item.id}>
                <StyledImg src={item.imageUrl} alt="pizza" />
                <div>
                  <h3>{item.title}</h3>
                  <span>
                    {pizzaTypes[item.types]}, {item.sizes} см.
                  </span>
                </div>

                <span>{item.price} &#8381;</span>
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
