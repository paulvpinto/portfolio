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

const Bio = Styled(Typography)`
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 2.1vh;
    padding: 3.5rem;

    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 2/6;
        padding: 0rem 3.5rem;
        font-size: 1.3vw;
    }

    ${props => props.theme.breakpoints.up("lg")} {
        grid-column: 2/6;
        padding: 0rem 3.5rem;
        font-size: 1vw;
    }
`;

const Tagline = Styled(Typography)`
    width: 100%;
    text-align: center;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 6/8;
        grid-row: 6/7;
    }
`;

const ImageContainer1 = Styled.div`
    background-color: var(--mainYellow);
    width: 40vw;
    height: 40vw;
    
    ${props => props.theme.breakpoints.up("md")} {
        grid-column: 6/8;
        grid-row: 1/6;
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
            Born and raised in Vancouver, I was fortunate enough to play many game consoles and handhelds of the generations. From the gameboy, to the dreamcast, to the playstation, to the xbox, I fell in love with playing video games. But the love didn't just stop at digital gaming, as I had been exposed to Tabletop games and card games splitting my heart in two.

            <br></br>   
            <br></br>  

            Delving into the world of computer science, I had discovered I could use my skills of creativity and logic to create games and experiences for myself and others to share. As I shifted my career towards Game Design, I graduated with a BSc in Interactive Arts and Technology learning many skills in the fields of digital media and design. 

            <br></br>   
            <br></br>  

            This has enabled me to be more relevant and insightful when working with other members of a team when collaborating on a project. As well as procure many different skills that have aided me in creating demos and prototypes of games, as well as create concepts, test, and balance a variety of games and projects I have worked on.
            </Bio>

        </Container>

        <FeaturedWorks></FeaturedWorks>
    </>
    );
}

export default About;