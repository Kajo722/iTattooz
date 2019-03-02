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

        let img = null;

        if (this.state.index === 0) {
            img = (
                <img src={img1} alt='img' className={styles.image}></img>
            )
        }
        if (this.state.index === 1) {
            img = (
                <img src={img2} alt='img' className={styles.image}></img>
            )
        }
        if (this.state.index === 2) {
            img = (
                <img src={img3} alt='img' className={styles.image}></img>
            )
        }

        return(
            <div className={styles.container}>
                {img}
            </div>
        )
    }
}

export default AboutSlideshow;