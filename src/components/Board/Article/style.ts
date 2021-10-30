import styled from "styled-components";

const Article = {
  Title: styled.h1`
    text-align: center;
  `,
  Articles: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: ${(props: { justifyContent: string }) =>
      props.justifyContent};
  `,
  Article: styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: min-content;
  `,

  Section: styled.section`
    width: 100%;

    margin: 10px;
  `,
};

export default Article;
