import React, { Component } from 'react';
import Plx from 'react-plx';
import Media from 'react-media';
import styles from './About.module.css';
import Image from '../../components/Image/Image';
import AboutSlideshow from '../../components/AboutSlideshow/AboutSlideshow';
import HeaderMain from '../../components/Typography/HeaderMain/HeaderMain';
import HeaderSecondary from '../../components/Typography/HeaderSecondary/HeaderSecondary';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import img1 from '../../assets/Images/AboutImage.jpg';
import img2 from '../../assets/Images/AboutImage3.jpg';

const imageMain = [
    {
        start: 'self',
        end: '100%',
        properties: [
            {
                startValue: 0,
                endValue: 70,
                property: 'translateX'
            }
        ]
    }
];
const imageSecondary = [
    {
        start: 'self',
        end: '100%',
        properties: [
            {
                startValue: -30,
                endValue: 70,
                property: 'translateY'
            }
        ]
    }
];

class About extends Component {
    state = {
        aboutText:
            'The Stylist Group is a leading digital publisher and media platform with pioneering brands Stylist and Emerald Street. Within an inspiring, fast-paced, entrepreneurial environment we create original magazines and digital brands for Stylist Women - our successful, sophisticated, dynamic and urban audience. These people have very little time, a considerable disposable income and no patience with inauthentic attempts to try to engage them. Our purpose is to create content Stylist Women are proud to enjoy.',
        scrolled: null
    };

    render() {
        return (
            <>
                <div className={styles.containerMain}>
                    <AboutSlideshow />
                    <div className={styles.mainImageContainer}>
                        <Media query='(max-width: 750px)'>
                            {matches =>
                                matches ? (
                                    <Image
                                        src={img1}
                                        alt='About Us section showing person with jacket Born This Way'
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    <Plx parallaxData={imageMain}>
                                        <Image
                                            src={img1}
                                            alt='About Us section showing person with jacket Born This Way'
                                            style={{ width: '100%' }}
                                        />
                                    </Plx>
                                )
                            }
                        </Media>
                    </div>
                    <div className={styles.header}>
                        <HeaderMain>Create your own tattoos</HeaderMain>
                        <HeaderSecondary>& customize them</HeaderSecondary>
                    </div>
                </div>
                <div className={styles.containerSecondary}>
                    <div className={styles.secondaryImageContainer}>
                        <Media query='(max-width: 750px)'>
                            {matches =>
                                matches ? (
                                    <Image
                                        src={img2}
                                        alt='img'
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    <Plx parallaxData={imageSecondary}>
                                        <Image
                                            src={img2}
                                            alt='img'
                                            style={{ width: '100%' }}
                                        />
                                    </Plx>
                                )
                            }
                        </Media>
                    </div>
                    <div className={styles.content}>
                        <HeaderMain>About Us</HeaderMain>
                        <Paragraph>{this.state.aboutText}</Paragraph>
                    </div>
                </div>
            </>
        );
    }
}

export default About;
