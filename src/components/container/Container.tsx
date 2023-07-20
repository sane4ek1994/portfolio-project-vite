import React from "react";
import {s} from './container.styles.ts'

type TContainer = {
    children: React.ReactNode;
}
export const Container = ({children}: TContainer) => {
    return (
        <s.Container>
            {children}
        </s.Container>
    );
};