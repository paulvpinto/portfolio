import React from 'react'
import Styled from 'styled-components'

const TitleDiv = Styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    display: grid;

    h4 {
        font-size: 300%;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        text-transform: capitalize;
    }

    ${props => props.theme.breakpoints.down("sm")} {
        h4 {
            font-size: 200%;
        }
    }
`;

export default function Title({title}) {
    return (
        <TitleDiv>
            <h4>
                {title}
            </h4>
        </TitleDiv>
    )
}
