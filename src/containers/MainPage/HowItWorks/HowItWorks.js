import React, { Component } from 'react';
import styles from './HowItWorks.module.css';
import Section from '../../../components/Typography/Section/Section';
import Features from '../../../components/Features/Features/Features';
import Feature from '../../../components/Features/Feature/Feature';
import img1 from '../../../assets/Images/HowItWorks/HowItWorks1.jpg';
import img2 from '../../../assets/Images/HowItWorks/HowItWorks2.jpg';
import img3 from '../../../assets/Images/HowItWorks/HowItWorks3.jpg';

class HowItWorks extends Component {
    state = {
        isMobile: false
    };
    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize());
    }

    resize = () => {
        let currentWidth = window.innerWidth <= 800;
        if (currentWidth !== this.state.isMobile) {
            this.setState(prevState => ({
                ...prevState,
                isMobile: !this.state.isMobile
            }));
        }
    };

    render() {
        return (
            <>
                <Section
                    header={"How it works? It's simple!"}
                    description={
                        'Implementing fully-customized tattoo of your dreams is extremely simple. There are only three short steps separating you from your goal.'
                    }
                />
                    <div className={styles.container}>
                        <div className={styles.featureContainer}>
                            <Features
                                headerText='Create initial design'
                                paragraphText='This is the time to fully express yourself. With the help of guidelines and software provided by iTattooz you can create any desing you can only imagine. When you are done, send us your work!'
                                containerClassName={styles.featureContent}
                                imageClassName={styles.image}
                                imgSrc={img1}>
                                <Feature>Contact us and get tools to start creating</Feature>
                                <Feature>Design your fully-personalized tattoo</Feature>
                                <Feature>Send the project directly to chosen artist</Feature>
                            </Features>
                        </div>
                        <div className={styles.featureContainer}>
                            <Features
                                headerText='Meet the artist'
                                paragraphText='After receiving your initial project, we set up a series of meetings between you and our tattoo artist. You can discuss your work and instruct the artist to make your design come to life.'
                                containerClassName={
                                    this.state.isMobile
                                        ? styles.featureContent
                                        : [
                                              styles.featureContent,
                                              styles.feature2
                                          ].join(' ')
                                }
                                imageClassName={
                                    this.state.isMobile
                                        ? styles.image
                                        : [styles.image, styles.image2].join(
                                              ' '
                                          )
                                }
                                imgSrc={img2}>
                                <Feature>Arrange a metting with artist</Feature>
                                <Feature>Discuss the artwork</Feature>
                                <Feature>Get the design draft prepared by designer</Feature>
                            </Features>
                        </div>
                        <div className={styles.featureContainer}>
                            <Features
                                headerText='Make your tattoo'
                                paragraphText='After accepting final design arrange a tattoo session in a time of your chosing. Our staff will provide you with any essential accessories and information for tattoo recovery.'
                                containerClassName={styles.featureContent}
                                imageClassName={styles.image}
                                imgSrc={img3}>
                                <Feature>Accept the final project or ask for corrections</Feature>
                                <Feature>Choose a suitable date for your session</Feature>
                                <Feature>Get the tattoo of your dreams designed by YOU!</Feature>
                            </Features>
                        </div>
                    </div>
            </>
        );
    }
}

export default HowItWorks;
