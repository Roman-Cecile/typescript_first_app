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
  // const OrderContext = React.useContext(orderTypeContext) as Context;
  const [orderType, setOrderType] = React.useState<string>("");
  console.log({ orderType });

  return (
    <>
      <OrderTypeContext.Provider value={orderType}>
        <AppStyled>
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
