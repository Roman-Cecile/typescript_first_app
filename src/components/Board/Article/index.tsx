import React, {
  FunctionComponent,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Styles
import StyledArticle from "./style";
import StyledGeneric from "../../../styles/GenericStyles";

// Context
import { CategoryContext } from "../../../context/categoryContext";

// Articles datas
import { datas } from "./datas";

// Types
import { datasProps } from "./datasType";
import { OrderProps } from "../Order/Type";
import { ArticleOrder } from "../Order/Type";

type ArticleProps = {
  setOrder: Dispatch<SetStateAction<ArticleOrder[]>>;
};

type MyFunctionType<ArgType> = (arg: ArgType) => void;

const Article: FunctionComponent<ArticleProps> = ({ setOrder }) => {
  const categoryContext = useContext(CategoryContext);

  const articlesSelected: datasProps[] = datas.filter(
    (data) => data.category === categoryContext
  );

  const handleClick: MyFunctionType<OrderProps> = (article) => {
    const articleInOrder: ArticleOrder = {
      idArticle: article.id,
      id: Math.random(),
      article,
    };
    setOrder((prevState: ArticleOrder[]) => [articleInOrder, ...prevState]);
  };

  return (
    <StyledArticle.Section>
      <StyledArticle.Title>
        {categoryContext?.toUpperCase()}
      </StyledArticle.Title>
      <StyledArticle.Articles
        justifyContent={
          articlesSelected.length > 4 ? "space-around" : "flex-start"
        }>
        {articlesSelected.map((article: OrderProps) => (
          <StyledArticle.Article
            key={article.title}
            onClick={() => handleClick(article)}>
            <StyledGeneric.Image src={article.img} alt={article.title} />
            <p>
              {article.title} - {article.price} €
            </p>
          </StyledArticle.Article>
        ))}
      </StyledArticle.Articles>
    </StyledArticle.Section>
  );
};

// export default Article;
export default React.memo(Article);
