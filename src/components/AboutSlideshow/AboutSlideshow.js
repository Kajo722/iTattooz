import React, {Component} from 'react';
import styles from './AboutSlideshow.module.css'
import img1 from '../../assets/Images/AboutSlideshow1.jpg';
import img2 from '../../assets/Images/AboutSlideshow2.jpg';
import img3 from '../../assets/Images/AboutSlideshow3.jpg';

class AboutSlideshow extends Component {

    state = {
        images: [img1, img2, img3],
        index: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => this.changeImage(), 2500);
    }

    componentWillUnmount(){
        clearInterval(this.interval);     
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.index !== nextState.index
    }

    changeImage = () => {
        this.setState(prevState => ({
            ...prevState,
            index: prevState.index + 1,
        }));
        if (this.state.index > 2) {
            this.setState(prevState => ({
                ...prevState,
                index: 0
            }))
        }
    }

    render() {
        return(
            <div className={styles.container}>
                    <img src={img1} alt='img' className={`${this.state.index === 0 ? styles.imageDisplay : styles.noImage}`}></img>
                    <img src={img2} alt='img' className={`${this.state.index === 1 ? styles.imageDisplay : styles.noImage}`}></img>
                    <img src={img3} alt='img' className={`${this.state.index === 2 ? styles.imageDisplay : styles.noImage}`}></img>
            </div>
        )
    }
}

export default AboutSlideshow;