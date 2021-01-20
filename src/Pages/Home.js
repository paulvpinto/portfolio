import { 
    Button, 
    Typography,
} from '@material-ui/core'

import Styled from 'styled-components'
import Theme from '../Constants/Theme'

import React from 'react'

import FeaturedWorks from '../Components/FeaturedWorks'
import Logo from '../Images/logo.png'


const MyGrid = Styled.div`
    height: 95vh;
    background-color: ${props => props.theme.palette.primary.main};
    padding-top: 4rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

const Tagline = Styled.div`
    grid-column: 2 / 5;
    grid-row: 3 / 5;
    align-content: center;
    justify-content: center;

    ${props => props.theme.breakpoints.down("md")} {
        grid-column: 2 / 6;
    }

    ${props => props.theme.breakpoints.down("sm")} {
        grid-column: 1 / 9;
        grid-row: 1 / 5;
    }
`;

const MyTypography = Styled(Typography)`
    font-size: 3.6rem;

    ${props => props.theme.breakpoints.down("lg")} {
        font-size: 3vw;
    }

    ${props => props.theme.breakpoints.down("md")} {
        font-size: 4vw;
    }

    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 5vw;
        padding: 3.5rem 3rem;
    }
      
`;

const BackgroundLogo = Styled.div`
    grid-column: 1 / 9;
    grid-row: 1 / 5;
    background-image:  url(${Logo});
    background-repeat: no-repeat;
    opacity: 20%;

    background-position: 90% 5vh;
    background-attachment: fixed;
    background-size: 120vh;

    ${props => props.theme.breakpoints.down("sm")} {
        background-position: center 22vh;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
`;

export default function Home() {

    return (
        <>
            <MyGrid>
                <Tagline>
                    <MyTypography variant="h2">
                        Hey, I'm Paul Pinto <br></br>
                        from Vancouver, BC and <br></br>
                        you're visiting my portfolio
                    </MyTypography>
                </Tagline>
                <BackgroundLogo></BackgroundLogo>
            </MyGrid>
            <FeaturedWorks></FeaturedWorks>
        </>
    );
}