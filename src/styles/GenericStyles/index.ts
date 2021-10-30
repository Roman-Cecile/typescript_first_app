import styled from "styled-components";

type propsType = {
  width: string;
  flexDirection?: string;
  paddingTop?: string;
  justifyContent?: string;
  display?: string;
  height: string;
};

const GenericStyles = {
  Container: styled.div`
    width: ${(props: propsType) => props.width};
    display: ${(props: propsType) => props.display};
    flex-direction: ${(props: propsType) => props.flexDirection};
    justify-content: ${(props: propsType) => props.justifyContent};
    height: ${(props: propsType) => props.height};
    overflow: auto;
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  `,
  Image: styled.img.attrs((props) => ({
    src:
      props.src ||
      "https://i.pinimg.com/originals/e1/ae/dd/e1aedd38803efd120c1b70766e189f4e.jpg",
    alt: props.alt || "image non répertoriée",
  }))`
    height: 70px;
    width: 100px;
    border-radius: 4px;
  `,
};

export default GenericStyles;
