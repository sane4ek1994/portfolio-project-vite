import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: aliceblue;
  border: 1px solid red;

`

const MenuItem = styled.li`
  margin: 0 10px 0 0;
  color: aliceblue;
  border: 1px red solid;

  &:last-child {
    margin: 0;
  }
`

export const s = {MenuItem, Menu}