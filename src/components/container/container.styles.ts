import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  border: 1px solid red;
  
  @media (max-width: 400px) {
    padding: 0 20px;
  }
  
`

export const s = {Container}