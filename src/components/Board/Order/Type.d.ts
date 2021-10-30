export type OrderProps = {
  title: string;
  price: number;
  category: string;
  img: string;
  id: number;
};

export type ArticleOrder = {
  idArticle: number;
  id: number;
  article: OrderProps;
};
