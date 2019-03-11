import React, { Component } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import styles from './Artists.module.css';
import Section from '../../../components/Typography/Section/Section';
import ArtistText from '../../../components/ArtistText/ArtistText';
import img1 from '../../../assets/Images/Artists/artist1.jpg';
import img2 from '../../../assets/Images/Artists/artist3.jpg';
import img3 from '../../../assets/Images/Artists/artist4.jpg';
import img4 from '../../../assets/Images/Artists/artist5.jpg';
import img5 from '../../../assets/Images/Artists/artist6.jpg';

class Artists extends Component {
    state = {
        index: 0,
        hovering: false,
    };

    componentDidMount() {
        this.interval = setInterval(() => this.changeImage(), 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    changeImage = () => {
        if (!this.state.hovering) {
            this.setState(prevState => ({
                ...prevState,
                index: prevState.index + 1
            }));
            if (this.state.index > 4) {
                this.setState(prevState => ({
                    ...prevState,
                    index: 0
                }));
            }
        }
    };

    hoverOn = index => {
        this.setState(prevState => ({
            ...prevState,
            index: index,
            hovering: true
        }));
        clearInterval(this.interval);
    };

    hoverOff = () => {
        this.setState(prevState => ({
            ...prevState,
            hovering: false
        }));
        this.interval = setInterval(() => this.changeImage(), 3000);
    };

    render() {
        let backgroundStyle = { background: 'rgb(255, 153, 255)' };
        let imgSrc = img1;

        if (this.state.index === 0) {
            backgroundStyle = { background: 'rgb(255, 153, 255)' };
            imgSrc = img1;
        }
        if (this.state.index === 1) {
            backgroundStyle = { background: 'rgb(51, 255, 204)' };
            imgSrc = img2;
        }
        if (this.state.index === 2) {
            backgroundStyle = { background: 'rgb(217, 217, 217)' };
            imgSrc = img3;
        }
        if (this.state.index === 3) {
            backgroundStyle = { background: 'rgb(255, 204, 153)' };
            imgSrc = img4;
        }
        if (this.state.index === 4) {
            backgroundStyle = { background: 'rgb(255, 80, 80)' };
            imgSrc = img5;
        }
        return (
            <>
                <Section
                    header={'Meet our artists'}
                    description={
                        'Our award-winning artists with years of experience will provide you with highest level of service. Stand out from the crowd with a personlized tattoo customized for you.'
                    }
                />
                <div style={backgroundStyle} className={styles.containerMain}>
                    <div className={styles.containerArtists}>
                        <div className={styles.artistsList}>
                            <ArtistText
                                hoverOn={() => this.hoverOn(0)}
                                hoverOff={this.hoverOff}
                                number={0}
                                index={this.state.index}
                                hovering={this.state.hovering}
                                underline={styles.underline}>Clare Melton
                                
                            </ArtistText>
                            <ArtistText
                                hoverOn={() => this.hoverOn(1)}
                                hoverOff={this.hoverOff}
                                number={1}
                                index={this.state.index}
                                hovering={this.state.hovering} underline={styles.underline}>
                                Guto Rodriguez
                            </ArtistText>
                            <ArtistText
                                hoverOn={() => this.hoverOn(2)}
                                hoverOff={this.hoverOff}
                                number={2}
                                index={this.state.index}
                                hovering={this.state.hovering} underline={styles.underline}>
                                Aoife Arellano
                            </ArtistText>
                            <ArtistText
                                hoverOn={() => this.hoverOn(3)}
                                hoverOff={this.hoverOff}
                                number={3}
                                index={this.state.index}
                                hovering={this.state.hovering} underline={styles.underline}>
                                Toni Bernal
                            </ArtistText>
                            <ArtistText
                                hoverOn={() => this.hoverOn(4)}
                                hoverOff={this.hoverOff}
                                number={4}
                                index={this.state.index}
                                hovering={this.state.hovering} underline={styles.underline}>
                                Sanaa Duke
                            </ArtistText>
                        </div>
                        <div className={styles.artistsImage}>
                            <CrossfadeImage
                                src={imgSrc}
                                delay={200}
                                duration={400}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Artists;
