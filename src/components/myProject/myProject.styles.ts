import styled from "styled-components";

const MyProjectSection = styled.section`
  background-color: darkkhaki;
  border: 1px solid red;
`

const MyProjectTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  border: 1px solid red;
  margin-bottom: 30px;
`

const MyProjectList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid red;
`


export const s = {MyProjectSection, MyProjectTitle, MyProjectList}