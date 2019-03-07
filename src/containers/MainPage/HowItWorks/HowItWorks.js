import React, { Component } from 'react';
import styles from './HowItWorks.module.css';
import Section from '../../../components/Typography/Section/Section';
import Features from '../../../components/Features/Features/Features';
import Feature from '../../../components/Features/Feature/Feature';
import img1 from '../../../assets/Images/HowItWorks1.jpg';
import img2 from '../../../assets/Images/HowItWorks2.jpg';
import img3 from '../../../assets/Images/HowItWorks3.jpg';

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
                                headerText='blalbalbalbablabla'
                                paragraphText='sadadasadssdfsdfdsfdssdfsd sdf s fsd fsdf sd sd sd fsdf sss fasdf sdf asd fsaf asdf asf sadf sadf saf saf as fasf sadfsadddddddddddddddf sadfsadfasfsfadfsa fsaddf sf sf ddasd'
                                containerClassName={styles.featureContent}
                                imageClassName={styles.image}
                                imgSrc={img1}>
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
                                        : [styles.image, styles.image2].join(
                                              ' '
                                          )
                                }
                                imgSrc={img2}>
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
                                imgSrc={img3}>
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
