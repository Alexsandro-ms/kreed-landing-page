import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  left: auto;

  img {
    max-width: 407px;
    margin-left: auto;
    opacity: 0;
    animation: animationImageHero 1s linear forwards;
  }

  @keyframes animationImageHero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }
`;
