import { Container } from "../../styles/Container";
import { Goods } from "../../layout/sections/cart/CartSection.";
import { Header } from "../header/Header";

export const Cart = () => {
  return (
    <Container>
      <Header />
      <Goods />
    </Container>
  );
};
