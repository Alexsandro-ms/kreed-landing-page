import React from "react";
import { Container } from "./styles";

type ButtonProps = {
  text: string;
  typeButton: "Primary" | "Secondary";
  rounded: number;
  width: number;
  height: number;
};

function Button({ text, typeButton, rounded, width, height }: ButtonProps) {
  return (
    <Container
      rounded={rounded}
      width={width}
      height={height}
      typeButton={typeButton}
    >
      {text}
    </Container>
  );
}

export default Button;
