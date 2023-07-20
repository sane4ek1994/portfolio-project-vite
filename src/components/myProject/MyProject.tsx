import {Container} from "../container/Container.tsx";
import {ProjectItem} from "./projectItem/ProjectItem.tsx";
import {s} from './myProject.styles.ts'


export const MyProject = () => {
    return (
        <s.MyProjectSection>
            <Container>
                <s.MyProjectTitle>My Project</s.MyProjectTitle>
                <s.MyProjectList>
                    <ProjectItem/>
                    <ProjectItem/>
                </s.MyProjectList>
            </Container>
        </s.MyProjectSection>
    );
};
