import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  position: relative;
  animation: animationInfos 0.5s linear forwards;

  h1 {
    color: var(--Blue-700);
    font-weight: 700;
    font-size: 3.2rem;
  }
  p {
    font-size: 1rem;
    max-width: 404px;
    color: rgba(30, 37, 94, 0.7);
    margin-top: 20px;
  }
  button {
    margin-top: 50px;
  }
  @keyframes animationInfos {
    from {
      opacity: 0;
      left: -50px;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }
`;
