import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 120px;
  > div {
    width: 50%;
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
  }
`;

export const ColumnImg = styled.div`
  display: flex;
  position: relative;
  img {
    max-width: 407px;
    margin-left: auto;
  }
`;
