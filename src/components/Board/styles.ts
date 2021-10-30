import styled from "styled-components";

type SectionProps = {
  width: string;
  display?: string;
};

const Board = {
  Container: styled.div`
    display: flex;
    padding: 0 50px;
  `,

  Section: styled.section`
    width: ${(props: SectionProps) => props.width};
    display: ${(props: SectionProps) => props.display};
  `,
};

export default Board;
