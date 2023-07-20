import styled from "styled-components";

const ProjectWrapper = styled.div`
  width: 200px;
  margin-right: 60px;
  background-color: chocolate;
  border-radius: 8px;
  border: 1px solid red;

  &:last-child {
    margin: 0;
  }

  @media (max-width: 505px) {
    margin: 0 0 20px 0;
  }
`

const ProjectHeader = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ43splMEwkijc2-r4FwaEjd6OFKnd3WmN4Q&usqp=CAU");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red
`
const ProjectFooter = styled.div`
  padding: 20px;
  border: 1px solid red
`

const ProjectName = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  border: 1px solid red
`
const ProjectDescr = styled.div`
  text-transform: uppercase;
  background-color: gray;
  border: 1px solid red
`

export const s = {ProjectWrapper, ProjectHeader, ProjectFooter, ProjectName, ProjectDescr}