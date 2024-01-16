import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import iconCart from "../../../ImgPizza/free-icon-font-shopping-cart-3916630.png";
import iconCoins from "../../../ImgPizza/free-icon-font-coins-7928197.png";

export const HeaderNavSectionStyled = (props) => {
  const countPizza = useSelector((state) => state.cart.pizza);
  const count = countPizza.reduce((acc, item) => (acc += item.count), 0);
  const sumPizza = countPizza.reduce(
    (acc, item) => (acc += item.count * item.price),
    0
  );

  return (
    <StyledHeaderNav>
      {props.list.map((item, index) => (
        <li key={index + 1}>
          <a href="#!">{item}</a>
        </li>
      ))}

      <StyledCart to="/cart">
        {sumPizza === 0 ? (
          <StyledCartSpan>
            <p>Корзина</p>
            <img src={iconCart} alt="Cart" />
          </StyledCartSpan>
        ) : (
          <StyledCartSpan>
            {count} шт. | {sumPizza} <img src={iconCoins} alt="Coins" />
          </StyledCartSpan>
        )}
      </StyledCart>
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  list-style: none;

  max-width: 1360px;
  margin-top: 30px;
  padding: 10px;

  background-color: #746a6a2e;
`;

const StyledCart = styled(Link)`
  border: 5px solid #ff9800;
  border-radius: 25px;
  padding: 10px 10px;

  color: black;
  font-weight: bold;
`;

const StyledCartSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;
