import React, {Component} from 'react';
import Plx from 'react-plx';
import Media from 'react-media';
import styles from './About.module.css';
import AboutImage from'../../components/AboutImage/AboutImage';
import AboutSlideshow from '../../components/AboutSlideshow/AboutSlideshow';
import img1 from '../../assets/Images/AboutImage.jpg';
import img2 from '../../assets/Images/AboutImage3.jpg';

    const imageMain = [
        {
          start: 'self',
          end: '100%',
          properties: [
            {
              startValue: 0,
              endValue: 50,
              property: "translateX"
            },
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
              endValue: 50,
              property: "translateY"
            },
          ]
        }
    ];
  
class About extends Component {

    state= {
        aboutText: 'sdfksdfsdfsdf sdf sdkf sdadhasdfbashdv jsh vsjahd vhasjdh fsjhd fajhsd fjahs dfjhas fhjasd fhjas dfhjsd fhjas dfhjsa dfhjsa dfhja sdhjf asjhdf jshadf jsa fhjs fjsha dfjkjf sdkjf skjdf skjd fskjd fkjs fkjs dfskj fskd jnslakdfnaskldf slkf salkd fsalkf sklf saklf lskd flsk falksd fslakdf salkf asklf lkas lks dflkas flaskf alskdf ',
        scrolled: null
    }

    render() {
        return(
            <>
            <div className={styles.containerMain}>
                <AboutSlideshow />
                <AboutImage containerStyle={styles.mainImageContainer}>
                    <Media query="(max-width: 750px)">
                        {matches =>
                            matches ? (
                            <img src={img1} alt='img' className={styles.imageMain}></img>
                            ) : (
                            <Plx parallaxData={imageMain}>
                                <img src={img1} alt='img' className={styles.imageMain}></img> 
                            </Plx>
                            )
                        }
                    </Media>
                </AboutImage>
                <div className={styles.header}>
                    <h2>Create your own tattoos</h2>
                    <h3>& customize them</h3>
                </div>
            </div>
            <div className={styles.containerSecondary}>
                <AboutImage containerStyle={styles.secondaryImageContainer}>
                <Media query="(max-width: 750px)">
                        {matches =>
                            matches ? (
                            <img src={img2} alt='img' className={styles.imageSecondary}></img>
                            ) : (
                            <Plx parallaxData={imageSecondary}>
                                <img src={img2} alt='img' className={styles.imageSecondary}></img> 
                            </Plx>
                            )
                        }
                    </Media>
                </AboutImage>
                <div className={styles.content}>
                    <h2>About Us</h2>
                    <div>{this.state.aboutText}</div>
                </div>
            </div>
            </>
        )
    }
}

export default About;