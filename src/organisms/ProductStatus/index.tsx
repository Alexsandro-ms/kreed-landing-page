import React from "react";
import Activity from "../../molecules/Activity";
import { Container } from "./styles";
import HeroImage from "../../assets/HeroWoman.png";

function ProductStatus() {
  return (
    <Container>
      <Activity />
      <img src={HeroImage} alt="Uma Mulher Lendo" />
    </Container>
  );
}

export default ProductStatus;
