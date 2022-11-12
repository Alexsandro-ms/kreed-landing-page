import React from "react";
import Button from "../../atoms/Button";
import { Container } from "./styles";

function ProductInfo() {
  return (
    <Container>
      <h1>Desenvolvimento orientado ao design do seu produto web</h1>
      <p>
        Somos uma agência digital de serviço completo que cria uma experiência
        de usuário imersiva.
      </p>
      <Button
        height={60}
        width={200}
        rounded={100}
        text="Fale Conosco"
        typeButton="Primary"
      />
    </Container>
  );
}

export default ProductInfo;
