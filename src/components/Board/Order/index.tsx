import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
} from "react";

import StyledOrder from "./style";
import StyledGeneric from "../../../styles/GenericStyles";

import { OrderContext } from "../../../context/orderContext";
import { ArticleOrder } from "./Type";

type OrdersSummaryType = {
  [key: string]: ArticleOrder[];
};

type OrderPropsType = {
  setOrder: Dispatch<SetStateAction<ArticleOrder[]>>;
};

const Order: FunctionComponent<OrderPropsType> = ({ setOrder }) => {
  const orderContext = useContext(OrderContext) as ArticleOrder[]; // To avoid null error
  const ordersSummary: OrdersSummaryType = {};
  const totalPrices: number[] = [0];

  // Sort products by category
  orderContext.map((product: ArticleOrder) => {
    if (ordersSummary[product.article.category]) {
      ordersSummary[product.article.category] = [
        product,
        ...ordersSummary[product.article.category],
      ];
    } else {
      ordersSummary[product.article.category] = [product];
    }
    return totalPrices.push(product.article.price);
  });

  const removeOneProduct = (productToRemove: ArticleOrder): void =>
    setOrder(orderContext.filter((product) => product !== productToRemove));

  console.log({ orderContext });

  return (
    <>
      <StyledOrder.Order>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Object.keys(ordersSummary).map((category) => (
            <div
              key={category}
              style={{ display: "flex", flexDirection: "column" }}>
              <p>{category.toUpperCase()}</p>
              {[...new Set(ordersSummary[category])].map((product, index) => (
                <p key={index} onClick={() => removeOneProduct(product)}>
                  {product.article.title} {product.article.price} €
                </p>
              ))}
            </div>
          ))}
        </div>
        <div>Prix: {totalPrices.reduce((a, b) => a + b)} €</div>
      </StyledOrder.Order>
    </>
  );
};

export default React.memo(Order);
