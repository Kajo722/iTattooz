import React, { Component } from 'react';
import styles from './Designs.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Image from '../../components/Image/Image';
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
                        <div
                            className={[styles.img1, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(1)}
                            onMouseLeave={this.hoverOff}>
                            <Image src={img1} className={styles.image} />
                            <div
                                className={
                                    this.state.index === 1
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 1
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Hand Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img2, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(2)}
                            onMouseLeave={this.hoverOff}>
                            <Image src={img2} className={styles.image} />
                            <div
                                className={
                                    this.state.index === 2
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 2
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Arm Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img3, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(3)}
                            onMouseLeave={this.hoverOff}>
                            <Image src={img3} className={styles.image} />
                            <div
                                className={
                                    this.state.index === 3
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 3
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Thigh Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img4, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(4)}
                            onMouseLeave={this.hoverOff}>
                            <Image
                                src={this.state.isMobile ? img6 : img4}
                                className={styles.image}
                            />
                            <div
                                className={
                                    this.state.index === 4
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 4
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Neck Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img5, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(5)}
                            onMouseLeave={this.hoverOff}>
                            <Image src={img5} className={styles.image} />
                            <div
                                className={
                                    this.state.index === 5
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 5
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Calf Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img6, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(6)}
                            onMouseLeave={this.hoverOff}>
                            <Image
                                src={this.state.isMobile ? img4 : img6}
                                className={styles.image}
                            />
                            <div
                                className={
                                    this.state.index === 6
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 6
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Chest Tattoos
                            </div>
                        </div>
                        <div
                            className={[styles.img7, styles.imgWrap].join(' ')}
                            onMouseEnter={() => this.hoverOn(7)}
                            onMouseLeave={this.hoverOff}>
                            <Image src={img7} className={styles.image} />
                            <div
                                className={
                                    this.state.index === 7
                                        ? [
                                              styles.backgroundVisible,
                                              styles.backgroundOnHover
                                          ].join(' ')
                                        : styles.backgroundNotVisible
                                }
                            />
                            <div
                                className={
                                    this.state.index === 7
                                        ? [
                                              styles.textVisible,
                                              styles.textOnHover
                                          ].join(' ')
                                        : styles.textHidden
                                }>
                                Back Tattoos
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Designs;
