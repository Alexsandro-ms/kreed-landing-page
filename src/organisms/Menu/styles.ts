import styled from "styled-components";

export const MenuList = styled.ul`
  margin-left: auto;
`;

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 24px;
  font-weight: 500;
  a {
    color: var(--Blue-700);
    border-bottom: 1px solid transparent;
    transition: all 0.5s;
    :hover {
      color: var(--Cyan-400);
      border-bottom: 1px solid var(--Cyan-400);
    }
  }
`;
