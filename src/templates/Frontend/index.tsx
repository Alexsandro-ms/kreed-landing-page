import React from "react";
import Header from "../../organisms/Header";
import { Container } from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

function Frontend({ children }: FrontendProps) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

export default Frontend;
