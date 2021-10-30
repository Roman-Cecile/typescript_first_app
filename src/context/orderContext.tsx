import { createContext } from "react";
import { ArticleOrder } from "../components/Board/Order/Type";

export const OrderContext = createContext<ArticleOrder[] | null>(null);
