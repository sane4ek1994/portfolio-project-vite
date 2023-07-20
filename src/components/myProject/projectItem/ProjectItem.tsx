import {s} from './projectItem.styles.ts'
export const ProjectItem = () => {
    return (
        <s.ProjectWrapper>
            <s.ProjectHeader>
                <button>view</button>
            </s.ProjectHeader>
            <s.ProjectFooter>
                <s.ProjectName>Project Name</s.ProjectName>
                <s.ProjectDescr>description project</s.ProjectDescr>
            </s.ProjectFooter>
        </s.ProjectWrapper>
    );
};
