import { 
    Typography,
} from '@material-ui/core'

import React from 'react'
import TopContainer from '../Components/TopContainer'
import Styled from 'styled-components'
import FeaturedWorks from '../Components/FeaturedWorks'

const Container = Styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props => props.theme.breakpoints.up("md")} {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        height: 59vh;
    }
`;

const Tagline = Styled(Typography)`
    width: 100%;
    text-align: center;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    padding: 3.5rem;

    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 5/8;
        grid-row: 1/2;
        padding: 0rem;
    }
`;

const Bio = Styled(Typography)`
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 2.1vh;
    padding: 3.5rem;

    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 1/4;
        grid-row: 1/2;
        padding: 2rem 3.5rem;
    }

`;

const Quote = Styled(Typography)`
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 2.1vh;
    padding: 3.5rem;

    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 2/6;
        grid-row: 3/4;
        padding: 2rem 3.5rem;
    }

`;

const ImageContainer1 = Styled.div`
    background-color: var(--mainYellow);
    width: 40vw;
    height: 40vw;
    
    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 6/9;
        grid-row: 2/9;
        width: 100%;
        height: 100%;
    }

`;


function About(props) {
    return (
    <> 
        <TopContainer title='About Me'/>
        <Container>
            <ImageContainer1></ImageContainer1>

            <Tagline>
                    I love to create games.
            </Tagline>

            <Bio>
                I graduated with a BSc in Interactive Arts and Technology learning many skills in the fields of digital media and design. This has enabled me to be more relevant and insightful when working with other members of a team when collaborating on a project.

            </Bio>

            <Quote>
                Games to me are exploring the endless possibilities of design and creativity.
            </Quote>
        </Container>

        <FeaturedWorks></FeaturedWorks>
    </>
    );
}

export default About;