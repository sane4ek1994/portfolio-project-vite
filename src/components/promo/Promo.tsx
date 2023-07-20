import {Container} from "../container/Container.tsx";
import {s} from './promo.styles.ts'
export const Promo = () => {
    return (
        <s.PromoSection>
           <Container>
               <s.PromoContent>
                   <s.PromoTitle>looking into remote work options</s.PromoTitle>
                   <button>hire me</button>
               </s.PromoContent>
           </Container>
        </s.PromoSection>
    );
};