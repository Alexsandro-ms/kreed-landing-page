import React from "react";
import { ItemList, MenuList } from "./styles";

function Menu() {
  return (
    <MenuList>
      <ItemList>
        <a href="#">Página Inicial</a>
      </ItemList>
      <ItemList>
        <a href="#">Sobre</a>
      </ItemList>
      <ItemList>
        <a href="#">Portifólio</a>
      </ItemList>
      <ItemList>
        <a href="#">Serviços</a>
      </ItemList>
      <ItemList>
        <a href="#">Contato</a>
      </ItemList>
    </MenuList>
  );
}

export default Menu;
