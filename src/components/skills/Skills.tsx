import {s} from './skills.styles.ts'
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../container/Container.tsx";

export const Skills = () => {
    return (
        <s.SkillsSection>
            <Container>
                <s.SkillsTitle>My Skills</s.SkillsTitle>
                <s.SkillsList>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </s.SkillsList>
            </Container>
        </s.SkillsSection>
    );
};
