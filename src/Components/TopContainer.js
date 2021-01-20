import {
    Button,
} from "@material-ui/core"

import Styled from 'styled-components'
import Theme from '../Constants/Theme'
import Title from '../Components/Title'

import React from 'react'

const Container = Styled.div`
    padding: 0;
    margin-top: 3.5rem;
    display: grid;
    height: 30vh;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${props => props.theme.palette.primary.main};
    align-items: center;
    
    ${props => props.theme.breakpoints.down("sm")} {
        height: 15%;
    }
`;

const TitleDiv = Styled.div`
    grid-column: 1/3;
`;

export default function TopContainer({title}) {

    return (
        <Container>
            <TitleDiv>
                <Title title={title}/>
            </TitleDiv>
        </Container>
    )
}