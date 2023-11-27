import { Main } from "./components/main/Main";
import { Header } from "./components/header/Header";
import { NotFoundBlock } from "./components/Cart/NotFoundBlock";
import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/Container";
import Sort from "./components/sort/Sort";
import React from "react";

function App() {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
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
              <Header />
              <NotFoundBlock />
            </React.Fragment>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
