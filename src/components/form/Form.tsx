import {Container} from "../container/Container.tsx";
import {s} from './form.styles.ts'

export const Form = () => {
    return (
        <s.FormSection>
            <Container>
                <s.FormTitle>Contact me</s.FormTitle>
                <s.Form>
                    <s.Input></s.Input>
                    <s.Input></s.Input>
                    <s.Textarea></s.Textarea>
                    <button>Send</button>
                </s.Form>
            </Container>
        </s.FormSection>
    );
};
