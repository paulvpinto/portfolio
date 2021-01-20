import React, { Component} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Styled from 'styled-components'
import Arrow from './Arrow'

const GalleryDiv = Styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
`;

const Image = Styled.img`
    object-fit: cover;
    width: 100%;
`;

const renderPrevButton = ({ isDisabled }) => {
    return <Arrow direction="left" />;
};

const renderNextButton = ({ isDisabled }) => {
    return <Arrow direction="right" />;
};

class Gallery extends Component {
    images = this.props.images.map((image) => {
        return <Image key={image} src={image}></Image>
    });

    render() {
        return (
            <GalleryDiv>
                <AliceCarousel
                    animationType="fadeout" 
                    animationDuration={800}
                    items={this.images}
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                />
            </GalleryDiv>
        )
    }
}

export default Gallery