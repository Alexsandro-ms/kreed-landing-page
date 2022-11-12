import { Container } from "./styles";
import HeroImage from "../../assets/HeroWoman.png";
import ChartCard from "../../molecules/ChartCard";
import ActivityCard from "../../molecules/ActivityCard";

function ProductStatus() {
  return (
    <Container>
      <ActivityCard />
      <ChartCard />
      <img src={HeroImage} alt="Uma Mulher Lendo" />
    </Container>
  );
}

export default ProductStatus;
