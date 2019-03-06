import React, { Component } from 'react';
import styles from './Designs.module.css';
import SectionHeader from '../../components/Typography/SectionHeader/SectionHeader';
import Image from '../../components/Image/Image';
import DesignElement from '../../components/DesignElement/DesignElement';
import img1 from '../../assets/Images/handTattoo2.jpg';
import img2 from '../../assets/Images/forearmTatto2.jpg';
import img3 from '../../assets/Images/hipTattoo2.jpg';
import img4 from '../../assets/Images/neckTattoo2.jpg';
import img5 from '../../assets/Images/calfTattoo.jpg';
import img6 from '../../assets/Images/chestTattoo.jpg';
import img7 from '../../assets/Images/backTattoo2.jpg';

class Designs extends Component {
    state = {
        isMobile: false,
        index: 0,
        hovering: false
    };
    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize());
    }

    resize = () => {
        let currentWidth = window.innerWidth <= 750;
        if (currentWidth !== this.state.isMobile) {
            this.setState(prevState => ({
                ...prevState,
                isMobile: !this.state.isMobile
            }));
        }
    };

    hoverOn = index => {
        this.setState(prevState => ({
            ...prevState,
            index: index,
            hovering: true
        }));
    };

    hoverOff = () => {
        this.setState(prevState => ({
            ...prevState,
            index: 0,
            hovering: false
        }));
    };

    render() {
        return (
            <>
                <SectionHeader>Discover beautiful designs</SectionHeader>
                <div className={styles.containerMain}>
                    <div className={styles.designsContainer}>
                        <DesignElement
                            containerStyle={[styles.img1, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(1)}
                            hoverOff={this.hoverOff}
                            imageSrc={img1}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 1
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 1
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Hand Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img2, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(2)}
                            hoverOff={this.hoverOff}
                            imageSrc={img2}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 2
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 2
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Arm Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img3, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(3)}
                            hoverOff={this.hoverOff}
                            imageSrc={img3}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 3
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 3
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Thigh Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img4, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(4)}
                            hoverOff={this.hoverOff}
                            imageSrc={this.state.isMobile ? img6 : img4}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 4
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 4
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Neck Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img5, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(5)}
                            hoverOff={this.hoverOff}
                            imageSrc={img5}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 5
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 5
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Calf Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img6, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(6)}
                            hoverOff={this.hoverOff}
                            imageSrc={this.state.isMobile ? img4 : img6}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 6
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 6
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Chest Tattoos
                        </DesignElement>
                        <DesignElement
                            containerStyle={[styles.img7, styles.imgWrap].join(
                                ' '
                            )}
                            hoverOn={() => this.hoverOn(7)}
                            hoverOff={this.hoverOff}
                            imageSrc={img7}
                            imageStyle={styles.image}
                            backgroundStyle={
                                this.state.index === 7
                                    ? [
                                          styles.backgroundVisible,
                                          styles.backgroundOnHover
                                      ].join(' ')
                                    : styles.backgroundNotVisible
                            }
                            textStyle={
                                this.state.index === 7
                                    ? [
                                          styles.textVisible,
                                          styles.textOnHover
                                      ].join(' ')
                                    : styles.textHidden
                            }>
                            Back Tattoos
                        </DesignElement>
                    </div>
                </div>
            </>
        );
    }
}

export default Designs;