import React, { Component } from 'react';
import CrossFadeImage from "@layflags/react-crossfade-image";
import styles from './Artists.module.css';
import Section from '../../../components/Typography/Section/Section';
import ArtistText from '../../../components/ArtistText/ArtistText';
import img1 from '../../../assets/Images/Artists/artist1.jpg';
import img2 from '../../../assets/Images/Artists/artist2.jpg';
import img3 from '../../../assets/Images/Artists/artist3.jpg';
import img4 from '../../../assets/Images/Artists/artist4.jpg';
import img5 from '../../../assets/Images/Artists/artist5.jpg';

class Artists extends Component {
    state = {
        index: 0,
        hovering: false
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

        const artistData = [
            { id: 0, name: 'Clare Melton' },
            { id: 1, name: 'Guto Rodriguez' },
            { id: 2, name: 'Aoife Arellano' },
            { id: 3, name: 'Toni Bernal' },
            { id: 4, name: 'Sanaa Duke' }
        ];

        const artists = artistData.map(artist => {
            return (
                <ArtistText
                key={artist.id}
                    hoverOn={() => this.hoverOn(artist.id)}
                    hoverOff={this.hoverOff}
                    number={artist.id}
                    index={this.state.index}
                    hovering={this.state.hovering}
                    underline={styles.underline}>
                    {artist.name}
                </ArtistText>
            );
        });

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
                        <div className={styles.artistsList}>{artists}</div>
                        <div className={styles.artistsImage}>
                        <CrossFadeImage src={imgSrc} alt='artist'/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Artists;
