import React, { Component } from 'react';
import styles from './HowItWorks.module.css';
import SectionHeader from '../../components/Typography/SectionHeader/SectionHeader';
import Features from '../../components/Features/Features/Features';
import Feature from '../../components/Features/Feature/Feature';
import img from '../../assets/Images/AboutImage2.jpg';

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
                <SectionHeader>How it works? It's simple!</SectionHeader>
                <div className={styles.container}>
                    <div className={styles.featureContainer}>
                        <Features
                            headerText='blalbalbalbablabla'
                            paragraphText='sadadasadssdfsdfdsfdssdfsd sdf s fsd fsdf sd sd sd fsdf sss fasdf sdf asd fsaf asdf asf sadf sadf saf saf as fasf sadfsadddddddddddddddf sadfsadfasfsfadfsa fsaddf sf sf ddasd'
                            containerClassName={styles.featureContent}
                            imageClassName={styles.image}
                            imgSrc={img}>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                        </Features>
                    </div>
                    <div className={styles.featureContainer}>
                        <Features
                            headerText='blalbalbalbablabla'
                            paragraphText='sadadasadssdfsdfdsfdssdfsd sdf s fsd fsdf sd sd sd fsdf sss fasdf sdf asd fsaf asdf asf sadf sadf saf saf as fasf sadfsadddddddddddddddf sadfsadfasfsfadfsa fsaddf sf sf ddasd'
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
                                    : [styles.image, styles.image2].join(' ')
                            }
                            imgSrc={img}>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                        </Features>
                    </div>
                    <div className={styles.featureContainer}>
                        <Features
                            headerText='blalbalbalbablabla'
                            paragraphText='sadadasadssdfsdfdsfdssdfsd sdf s fsd fsdf sd sd sd fsdf sss fasdf sdf asd fsaf asdf asf sadf sadf saf saf as fasf sadfsadddddddddddddddf sadfsadfasfsfadfsa fsaddf sf sf ddasd'
                            containerClassName={styles.featureContent}
                            imageClassName={styles.image}
                            imgSrc={img}>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                            <Feature>blablablblalbalab</Feature>
                        </Features>
                    </div>
                </div>
            </>
        );
    }
}

export default HowItWorks;
