import styled from "styled-components";

const PromoSection = styled.section`
  padding: 30px 0;
  background-color: darkkhaki;
  border: 1px solid red;
`
const PromoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PromoTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid red;
`

export const s = {PromoSection, PromoTitle, PromoContent}