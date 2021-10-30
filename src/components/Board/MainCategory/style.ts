import styled from "styled-components";

type CategoryProps = {
  color: string;
};

const MainCategory = {
  Category: styled.div`
    border-bottom: solid 1px #c5c5c5;
    height: auto;
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${(props: CategoryProps) => props.color};
    transition: background-color 0.5s ease-out;
  `,
};

export default MainCategory;
