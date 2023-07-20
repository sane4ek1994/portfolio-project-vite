import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  border: 1px solid red;
  background-color: rebeccapurple;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 400px) {
    justify-content: center;
  }
`

export const s = {Header, HeaderWrapper}
