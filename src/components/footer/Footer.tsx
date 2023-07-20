import {Container} from "../container/Container.tsx";
import {s} from './footer.styles.ts'

export const Footer = () => {
    return (
        <s.Footer>
            <Container>
                <s.FooterTitle>Alex Naumov</s.FooterTitle>
                <s.FooterContent>
                    <s.FooterItem/>
                    <s.FooterItem/>
                    <s.FooterItem/>
                    <s.FooterItem/>
                </s.FooterContent>
                <s.FooterText>@ 2023 All rights reserved</s.FooterText>
            </Container>
        </s.Footer>
    );
};

