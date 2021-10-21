import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";
import LandingPageStyled from "./style";

type LinkProps = {
  children: string;
  type: string;
};

const Link = ({ children, type }: LinkProps) => (
  <LandingPageStyled.Link to={type}>{children}</LandingPageStyled.Link>
);

type LandingPageProps = {
  setOrderType: (prevState: string) => void;
};

const LandingPage: FunctionComponent<LandingPageProps> = ({ setOrderType }) => {
  const history = useHistory();
  return (
    <>
      <LandingPageStyled.Container>
        {/* TEXT */}
        <LandingPageStyled.TextContainer>
          <LandingPageStyled.Text size="xxx-large">
            Bienvenue
          </LandingPageStyled.Text>
          <LandingPageStyled.Text size="large">
            Choisissez votre type de commande
          </LandingPageStyled.Text>
        </LandingPageStyled.TextContainer>

        {/* Buttons */}
        <LandingPageStyled.ContainerButtons>
          <LandingPageStyled.Button
            bgColor="#f9de7c"
            onClick={() => {
              setOrderType("spot");
              history.push("/board");
            }}>
            Sur place
          </LandingPageStyled.Button>
          <LandingPageStyled.Button
            bgColor="#7cd1f9"
            onClick={() => {
              setOrderType("away");
              history.push("/board");
            }}>
            À emporter
          </LandingPageStyled.Button>
        </LandingPageStyled.ContainerButtons>
      </LandingPageStyled.Container>
      <Link type="/signup">S'inscrire</Link>
      <br />
      <Link type="/signin">Se connecter</Link>
    </>
  );
};

export default LandingPage;
