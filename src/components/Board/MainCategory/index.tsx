import React, {
  FunctionComponent,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import StyledMainCategory from "./style";
import StyledGeneric from "../../../styles/GenericStyles";
import { datas } from "./data";
import { CategoryContext } from "../../../context/categoryContext";

type MainCategoryProps = {
  setCategory: Dispatch<SetStateAction<string>>;
};

const MainCategory: FunctionComponent<MainCategoryProps> = ({
  setCategory,
}) => {
  const context = useContext(CategoryContext);
  console.log("main Category");

  const handleClick = (type: string): void => {
    setCategory(type);
  };

  return (
    <>
      {datas.map((data) => (
        <StyledMainCategory.Category
          key={data.title}
          color={data.title === context ? "#bbbbbb" : ""}
          onClick={() => handleClick(data.title)}>
          <StyledGeneric.Image />
          <p>{data.title}</p>
        </StyledMainCategory.Category>
      ))}
    </>
  );
};

export default React.memo(MainCategory);
