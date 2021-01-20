import { 
    Button, 
    Typography,
    Grid,
    Paper,
} from '@material-ui/core'

import styled from 'styled-components';

import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import defaultImg from '../Images/coming_soon.png'

const WorkPreview = styled.article`
    transition: var(--mainTransition);
    padding: 1.5vw;
    &:hover {
        background-color: ${props => props.theme.palette.primary.main};
    }
`;

const NameContainer = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.palette.common.black};
    text-align: center;
    text-transform: capitalize;
    font-size: 150%;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    
    ${props => props.theme.breakpoints.down("lg")} {

    }

    ${props => props.theme.breakpoints.down("md")} {
 
    }

    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 1rem;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    a {
        text-decoration: none;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 22vw;
        transition: var(--mainTransition);
    }

    ${props => props.theme.breakpoints.down("sm")} {
        img {
            height: 80vw;
        }
    }
`;

export default function Work({ work }) {
    const { name, slug, preview } = work;

    return (
        <WorkPreview>
            <ImageContainer>
                <Link to={`/works/${slug}`}>
                    <img src={preview || defaultImg} alt="Work Preview" />
                    <NameContainer>
                        <p>{name}</p>
                    </NameContainer>
                </Link>
            </ImageContainer>
        </WorkPreview>
    )
}

Work.propTypes = {
    work: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        type: PropTypes.string.isRequired
    })
}