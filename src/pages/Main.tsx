import Frontend from "../templates/Frontend";

import { Container } from "./styles";
import ProductInfo from "../organisms/ProductInformation";
import ProductStatus from "../organisms/ProductStatus";

function Main() {
  return (
    <Frontend>
      <Container>
        <ProductInfo />
        <ProductStatus />
      </Container>
    </Frontend>
  );
}

export default Main;
