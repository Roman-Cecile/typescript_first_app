import React, { FunctionComponent } from "react";
import { AppStyled } from "./style";

// Styles
import "./App.css";

// React router dom
import { Switch, Route } from "react-router-dom";

// Components
import LandingPage from "../LandingPage";
import Board from "../Board";

// Context
import { OrderTypeContext } from "../../context/orderTypeContext";

const App: FunctionComponent = () => {
  const [orderType, setOrderType] = React.useState<string>("");
  console.log({ orderType });

  return (
    <>
      <OrderTypeContext.Provider value={orderType}>
        <AppStyled>
          <header
            style={{
              padding: 50,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <h1>Mon restaurant</h1>
            <h3>ouvert de 7h à 12h</h3>
          </header>
          <hr />
          <Switch>
            <Route exact path="/">
              <LandingPage setOrderType={setOrderType} />
            </Route>
            <Route exact path="/board">
              <Board orderType={orderType} />
            </Route>
          </Switch>
        </AppStyled>
      </OrderTypeContext.Provider>
    </>
  );
};

export default App;
