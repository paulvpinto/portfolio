import React from 'react'
import loadingGif from '../Images/loading-arrow.gif'
import Styled from 'styled-components'

const LoadDiv = Styled.div`
    display: display;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    text-transform: capitalize;
    background-color: ${props => props.theme.palette.primary.main};
    padding-top: 4rem;

    background-image:  url(${loadingGif});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`;

export default function Loading() {
    return (
        <LoadDiv>
        </LoadDiv>
    )
}
