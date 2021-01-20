import React from 'react'
import Work from './Work'
import Styled from 'styled-components'

const Section = Styled.section`    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 0;

    h1  {
        padding: 15vw 14vw 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 3.5vw;
    }

    ${props => props.theme.breakpoints.down("md")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${props => props.theme.breakpoints.down("sm")} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default function WorksList({ works }) {

    return (
        <Section>
            {
                works.map(item => {
                    return <Work key={item.id} work={item} />;
                })
            }
        </Section>
    );
}
