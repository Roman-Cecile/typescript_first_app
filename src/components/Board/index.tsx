import React, { FunctionComponent, useState } from "react";

// Components
import MainCategory from "./MainCategory";
import Article from "./Article";
import Order from "./Order";

// Style
import StyledBoard from "./styles";
import { CategoryContext } from "../../context/categoryContext";
import { OrderContext } from "../../context/orderContext";
import StyledGeneric from "../../styles/GenericStyles";

import { ArticleOrder } from "./Order/Type";

type BoardTypes = {
  orderType: string;
};

const Board: FunctionComponent<BoardTypes> = ({ orderType }) => {
  const [category, setCategory] = useState<string>("entrées");
  const [order, setOrder] = useState<ArticleOrder[]>([]);
  return (
    <StyledBoard.Container>
      <CategoryContext.Provider value={category}>
        <OrderContext.Provider value={order}>
          <StyledBoard.Section width="20%">
            {/* ............. */}
            {/* MAIN CATEGORY */}
            {/* ............. */}
            <StyledGeneric.Container
              height="70vh"
              width="100%"
              flexDirection="column"
              display="flex">
              <MainCategory setCategory={setCategory} />
            </StyledGeneric.Container>
          </StyledBoard.Section>

          <StyledBoard.Section width="80%" display="flex">
            {/* ................. */}
            {/* .....Article..... */}
            {/* ................. */}
            <StyledGeneric.Container height="75vh" width="70%" display="flex">
              <Article setOrder={setOrder} />
            </StyledGeneric.Container>
            {/* ............... */}
            {/* .....Order..... */}
            {/* ............... */}
            <StyledGeneric.Container height="70vh" width="30%">
              <Order setOrder={setOrder} />
            </StyledGeneric.Container>
          </StyledBoard.Section>
        </OrderContext.Provider>
      </CategoryContext.Provider>
    </StyledBoard.Container>
  );
};

export default Board;
