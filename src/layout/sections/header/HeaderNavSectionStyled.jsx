import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNavSectionStyled = (props) => {

  return (
    <StyledHeaderNav>
      {props.list.map((item, index) => (
        <li key={index + 1}>
          <a href="#!">{item}</a>
        </li>
      ))}
      <StyledCart to="/cart">Корзина</StyledCart>
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
  padding: 10px;

  color: black;
  font-weight: bold;
`;
