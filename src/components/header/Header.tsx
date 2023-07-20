import {s} from './header.styles.ts'
import {Navigation} from "../navigation/Navigation.tsx";
import {Container} from "../container/Container.tsx";

export const Header = () => {
    return (
        <>
            <s.Header>
                <Container>
                    <s.HeaderWrapper>
                        <Navigation/>
                    </s.HeaderWrapper>
                </Container>
            </s.Header>
        </>
    );
};
