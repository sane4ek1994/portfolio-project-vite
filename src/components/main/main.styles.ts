import styled from "styled-components";

const MainSection = styled.section`
  
  background-color: cornflowerblue;
  border: 1px red solid;
`

const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px red solid;
`

const MainText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px red solid;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`

const ImageBlock = styled.img`
  display: block;
  border: 1px red solid;
`

export const s = {MainSection, MainContent, MainText, ImageBlock}