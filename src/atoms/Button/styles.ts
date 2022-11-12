import styled from "styled-components";

type ButtonPropsStyles = {
  rounded: number;
  width: number;
  height: number;
  typeButton: string;
};

export const Container = styled.button<ButtonPropsStyles>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-weight: 500;
  font-size: 0.875rem;
  font-family: var(--Poppins);
  border-radius: ${(props) => props.rounded}px;
  cursor: pointer;
  transition: 0.5s;
  background-color: var(
    ${(props) =>
      props.typeButton === "Secondary" ? "--transparent" : "--Cyan-400"}
  );
  border: 1px solid
    var(
      ${(props) =>
        props.typeButton === "Secondary" ? "--Cyan-400 " : "--Transparent"}
    );
  color: var(
    ${(props) =>
      props.typeButton === "Secondary" ? "--Cyan-400 " : "--White-500"}
  );
  :hover {
    box-shadow: 0px 0px 5px var(--Cyan-400);
    transform: scale(0.9);
    font-size: 0.89rem;
    text-shadow: 0px 0px 15px var(--Cyan-400);
  }
`;
