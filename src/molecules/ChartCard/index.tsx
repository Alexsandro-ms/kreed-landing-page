import { useCallback } from "react";
import { Container, Chart } from "./styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function ChartCard() {
  const amountBars: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const fillZero = useCallback((value: number) => {
    const number = (value + 1).toString();
    return number.padStart(2, "0");
  }, []);
  return (
    <Container>
      <div>
        <FiArrowLeft />
        <strong>Estatísticas</strong>
        <FiArrowRight />
      </div>
      <Chart>
        {amountBars.map((item) => (
          <div key={String(item)}>
            <div>
              <span></span>
            </div>
            <small>{fillZero(item)}</small>
          </div>
        ))}
      </Chart>
    </Container>
  );
}

export default ChartCard;
