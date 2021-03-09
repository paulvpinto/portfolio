import {  
    Typography,
} from '@material-ui/core'

import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import Styled from 'styled-components'

import TopContainer from '../Components/TopContainer'
import Gallery from '../Components/Gallery'

import FeaturedWorks from '../Components/FeaturedWorks'

import { WorkContext } from '../context'

const Container = Styled.div`
    padding: 8rem 8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0rem;
    row-gap: 4rem;

    justify-items: center;
    justify-content: center; 

    background-color: ${props => props.theme.palette.secondary.main};

    ${props => props.theme.breakpoints.down("sm")} {
        grid-template-columns: repeat(1, 1fr);
        padding: 4rem 0;
    }
`;

const MediaContentDiv = Styled.div`
    width: 40vw;   

    img {
        object-fit: cover;
        width: 100%;
        transition: var(--mainTransition);
    }

    ${props => props.theme.breakpoints.down("sm")} {
        width: 90vw;
    }
`;

const WritingContentDiv = Styled.div`
    width: 40vw;   
    padding: 0 2rem; 

    ${props => props.theme.breakpoints.down("sm")} {
        width: 90vw;
    }
`;

const ParaTitle = Styled(Typography)`
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: capitalize;
`;

const Paragraph = Styled.div`
    white-space: pre-line;
`;


const PlayerWrapper = Styled.div`
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;

const Video = Styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
`;

export default class WorkDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
        };
    }

    static contextType = WorkContext;

    render() {
        const { getWork } = this.context;
        const work = getWork(this.state.slug);

        if (!work) {
            return (
                <>
                    <TopContainer title="Sorry I haven't worked on that yet..."/>
                    <FeaturedWorks></FeaturedWorks>
                </>
            );
        }

        const { name, content } = work;

        const WorkContent = content.map((item) => {
            var  mediafile;

            var type = item.fields.media.type;

            if (type === "video") {
                mediafile = <PlayerWrapper> <Video url={item.fields.media.url} width='100%' height='100%'> </Video> </PlayerWrapper>;
            }
            else if (type === "image") {
                mediafile = <img src={item.fields.media.url} alt="Imagery"></img>;
            }
            else if (type === "gallery") {
                mediafile = <Gallery images={item.fields.media.gallery}></Gallery>;
            }
            
            return (
                <>
                <MediaContentDiv>
                    {mediafile}
                </MediaContentDiv>
                <WritingContentDiv>
                    <ParaTitle>
                        {item.fields.title}
                    </ParaTitle>
                    <Paragraph>
                        {item.fields.paragraph}
                    </Paragraph>
                </WritingContentDiv>
                </>
            )
        })

        return (
            <>
                <TopContainer title={name}/>
                <Container>
                    {WorkContent}
                </Container>
            </>
        );
    }
}