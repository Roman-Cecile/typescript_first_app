import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface ThemedStyledFunction {
  bgColor?: string;
  size?: string;
}

const styles = {
  Container: styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  TextContainer: styled.div`
    margin: 0px auto 20px;
  `,
  Text: styled.p`
    font-size: ${(props: ThemedStyledFunction) => props.size};
  `,
  ContainerButtons: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
  Button: styled.button`
    border: white solid 1px;
    padding: 8px;
    border-radius: 4px;
    width: 150px;
    text-transform: uppercase;
    margin: 16px;
    background-color: ${(props: ThemedStyledFunction) => props.bgColor};

    &:hover {
      background-color: red;
      color: white;
      transition: background-color 0.5s ease-out 100ms,
        color 0.5s ease-out 100ms;
    }
  `,

  Link: styled(NavLink)`
    text-decoration: none;
    color: black;
    display: inline-block;
    margin: 8px;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export default styles;
