import styled from "styled-components";

const Footer = styled.footer`
  padding: 30px 0 0 0;
  background-color: crimson;
  border: 1px solid red;
`

const FooterTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  border: 1px solid red;
`

const FooterContent = styled.div`
  width: 260px;
  height: 40px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
`

const FooterItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: cyan;
  border: 1px solid red;
`

const FooterText = styled.p`
  text-align: center;
`
export const s = {Footer, FooterTitle, FooterContent, FooterItem, FooterText}