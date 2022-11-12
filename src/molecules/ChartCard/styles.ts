import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 210px;
  position: absolute;
  border-radius: 18px;
  background-color: var(--White-500);
  box-shadow: 0 17.5px 28px rgba(0, 0, 0, 0.1);
  bottom: -50px;
  left: 30px;
  padding: 20px;
  animation: showOnPage 0.5s linear forwards;
  opacity: 0;
  z-index: 89;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    strong {
      font-weight: 500;
    }
  }
  @keyframes showOnPage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;

function generateBars() {
  const amountBars = [...Array(12).keys()];
  let styleSpan: any = [];
  amountBars.forEach((item) => {
    styleSpan.push(`
    div:nth-child(${item + 1}){
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
        div{
          width: 2.1px;
          height: 91px;
          background-color: var(--Blue-200);
          border-radius: 5px;
          display: flex;
          justify-content: flex-end;
          span{
            background-color: var(--Blue-400);
            display: block;
            width: 3.5px;
            animation: animationHeight 1s linear forwards;
            max-height: ${Math.ceil(Math.random() * 100)}px;
            border-radius: 5px;
          }
        }
        small{
          color: var(--Cyan-200);
          font-size: 0.65rem;
          margin-top: 10px;
        }
      }
    `);
  });
  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;
  ${generateBars()}

  @keyframes animationHeight {
    from {
      height: 0;
    }
    to {
      height: 91px;
    }
  }
`;
