import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 20px 0;
  background-color: cadetblue;
  border: 1px solid red;
`
const SkillsTitle = styled.h2`
  margin: 0 0 40px 0;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid red;
`

const SkillsList = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 567px) {
    flex-wrap: wrap;
  }
`

export const s = {SkillsSection, SkillsTitle, SkillsList}