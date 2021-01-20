import React from 'react'
import Styled from 'styled-components'
import leftArrow from '../Images/left-arrow.svg'
import rightArrow from '../Images/right-arrow.svg'

const ArrowDiv = Styled.div`
    position: absolute;
    bottom: 1rem;
    ${props => props.direction === 'right' ? 'right: 5%' : 'left: 5%'};
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.palette.secondary.main};
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in 0.1s;
    opacity: 80%;
    
    &:hover {
        transform: scale(1.1);
        opacity: 100%;
      }

    img {
        height: 1.5rem;
        width: 1.5rem;
        transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
    }
`;

const Arrow = ({ direction, handleClick}) => (
    <ArrowDiv direction={direction} onClick={handleClick}>
        {direction === 'right' ? <img src={rightArrow} alt="Right Arrow"/> : <img src={leftArrow} alt="Left Arrow"/>}
    </ArrowDiv>
)

export default Arrow