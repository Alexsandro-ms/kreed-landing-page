import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { Container } from "./styles";

function Activity() {
  return (
    <Container>
      <small>Atividade</small>
      <div>
        <strong>18 </strong>
        <FiArrowUp size={24} color={"#fff"} />
      </div>
      <i className="circle1"></i>
      <i className="circle2"></i>
      <i className="circle3"></i>
    </Container>
  );
}

export default Activity;
