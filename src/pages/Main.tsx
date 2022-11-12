import React from "react";
import Button from "../atoms/Button";
import Frontend from "../templates/Frontend";
import { ColumnImg, Container } from "./styles";

import HeroImage from "../assets/HeroWoman.png";
import Activity from "../molecules/Activity";

function Main() {
  return (
    <Frontend>
      <Container>
        <div>
          <h1>Desenvolvimento orientado ao design do seu produto web</h1>
          <p>
            Somos uma agência digital de serviço completo que cria uma
            experiência de usuário imersiva.
          </p>
          <Button
            height={60}
            width={200}
            rounded={100}
            text="Fale Conosco"
            typeButton="Primary"
          />
        </div>
        <ColumnImg>
          <Activity />
          <img src={HeroImage} alt="Uma Mulher Lendo" />
        </ColumnImg>
      </Container>
    </Frontend>
  );
}

export default Main;
