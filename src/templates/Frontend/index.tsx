import React from "react";
import { Container } from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

function Frontend({ children }: FrontendProps) {
  return <Container>{children}</Container>;
}

export default Frontend;
