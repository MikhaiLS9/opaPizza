import { Main } from "./components/main/Main";
import { Header } from "./components/header/Header";
import { Cart } from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/Container";
import Sort from "./components/sort/Sort";
import React from "react";

function App() {
  return (
    <Container>
      <Routes>
        <Route
          path="/opaPizza"
          element={
            <React.Fragment>
              <Header />
              <Sort />
              <Main />
            </React.Fragment>
          }
        />
        <Route
          path="/cart"
          element={
            <React.Fragment>
              {/* <Header /> */}
              <Cart />
            </React.Fragment>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
