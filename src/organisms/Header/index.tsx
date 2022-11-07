import React from "react";
import Button from "../../atoms/Button";
import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import { Box } from "./styles";

function Header() {
  return (
    <Box>
      <Logo />
      <Menu />
      <Button
        typeButton="Secondary"
        width={130}
        height={42}
        rounded={4}
        text={"Ver Mais"}
      />
    </Box>
  );
}

export default Header;
