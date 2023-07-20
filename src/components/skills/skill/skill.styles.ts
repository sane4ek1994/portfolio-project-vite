import styled from "styled-components";

const SkillItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: antiquewhite;
  border-radius: 8px;
  border: 1px solid red;

  &:last-child {
    margin: 0;
  }

  @media (max-width: 567px) {
    margin: 0 0 20px 0;
  }
`

const SkillIcon = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 25px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid red;
  background-size: cover;
`
const SkillTitle = styled.h3`
  margin: 0 0 20px 0;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid red;
`
const SkillDescription = styled.p`
  text-transform: capitalize;
  border: 1px solid red;
`

export const s = {SkillItem, SkillIcon, SkillDescription, SkillTitle}