import React, { Component } from 'react';
import styles from './Designs.module.css';
import Section from '../../../components/Typography/Section/Section';
import DesignElement from '../../../components/DesignElement/DesignElement';
import img1 from '../../../assets/Images/Designs/handTattoo2.jpg';
import img2 from '../../../assets/Images/Designs/forearmTatto2.jpg';
import img3 from '../../../assets/Images/Designs/hipTattoo2.jpg';
import img4 from '../../../assets/Images/Designs/neckTattoo2.jpg';
import img5 from '../../../assets/Images/Designs/calfTattoo.jpg';
import img6 from '../../../assets/Images/Designs/chestTattoo.jpg';
import img7 from '../../../assets/Images/Designs/backTattoo2.jpg';

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
        const designData = [
            { id: 1, style: styles.img1, text: 'Hand Tattoos', img: img1 },
            { id: 2, style: styles.img2, text: 'Arm Tattoos', img: img2 },
            { id: 3, style: styles.img3, text: 'Thigh Tattoos', img: img3 },
            {
                id: 4,
                style: styles.img4,
                text: this.state.isMobile ? 'Chest Tattoos' : 'Neck Tattoos',
                img: this.state.isMobile ? img6 : img4
            },
            { id: 5, style: styles.img5, text: 'Calf Tattoos', img: img5 },
            {
                id: 6,
                style: styles.img6,
                text: this.state.isMobile ? 'Neck Tattoos' : 'Chest Tattoos',
                img: this.state.isMobile ? img4 : img6
            },
            { id: 7, style: styles.img7, text: 'Back Tattoos', img: img7 }
        ];

        const designs = designData.map(design => {
            return (
                <DesignElement
                    containerStyle={design.style}
                    hoverOn={() => this.hoverOn(design.id)}
                    hoverOff={this.hoverOff}
                    imageSrc={design.img}
                    imageStyle={styles.image}
                    number={design.id}
                    index={this.state.index}>
                    {design.text}
                </DesignElement>
            );
        });

        return (
            <>
                <Section
                    header={'Discover endless posibilities'}
                    description={
                        'In iTattooz we let our customers choose from all variaties of designs - everything is possible. Imagination is the only limit. You can express yourself anywhere on your body.'
                    }
                />
                <div className={styles.containerMain}>
                    <div className={styles.designsContainer}>{designs}</div>
                </div>
            </>
        );
    }
}

export default Designs;
