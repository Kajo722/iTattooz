import React, { Component } from 'react';
import Plx from 'react-plx';
import Media from 'react-media';
import styles from './About.module.css';
import Image from '../../../components/Image/Image';
import AboutSlideshow from '../../../components/AboutSlideshow/AboutSlideshow';
import HeaderMain from '../../../components/Typography/HeaderMain/HeaderMain';
import HeaderSecondary from '../../../components/Typography/HeaderSecondary/HeaderSecondary';
import Section from '../../../components/Typography/Section/Section';
import Paragraph from '../../../components/Typography/Paragraph/Paragraph';
import img1 from '../../../assets/Images/AboutImage.jpg';
import img2 from '../../../assets/Images/AboutImage3.jpg';

const imageMain = [
    {
        start: 'self',
        duration: 2000,
        properties: [
            {
                startValue: 0,
                endValue: 90,
                property: 'translateX'
            }
        ]
    }
];
const imageSecondary = [
    {
        start: 'self',
        duration: 2000,
        properties: [
            {
                startValue: -30,
                endValue: 60,
                property: 'translateY'
            }
        ]
    }
];

class About extends Component {
    state = {
        scrolled: null
    };

    render() {
        let aboutText = `The iTattooz is an innovative tattoo studio with pioneering brands and artists creating amazing brand for people ready to express themselves. 
        With the innovative approach to tattoo creation we created a new way to finally make the tattoos any person could ever dream of. 
        Our brand is a way for any Man and Women - our successful, sophisticated, dynamic and urban audience, to become an artist.  
        Time of tattoes made of templates has ended. iTattoz lets our customers to be involved in the process of tattoo design creation from the scratch. 
        Our purpose is to help tattoo enthusiasts to create content they can be proud of and enjoy.`;

        return (
            <>
                <Section
                    header={'Enter the world of beutiful designs'}
                    description={
                        'Experience the proccess of tattoo creation by yourself. Be a part of it.'
                    }
                />
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
                        <Paragraph>{aboutText}</Paragraph>
                    </div>
                </div>
            </>
        );
    }
}

export default About;
