import React from 'react';
import styles from './DesignElement.module.css';
import Image from '../Image/Image';

const DesignElement = props => {
    return (
        <div
            className={[styles.imgWrap, props.containerStyle].join(' ')}
            onMouseEnter={props.hoverOn}
            onMouseLeave={props.hoverOff}
            index={props.index}
            number={props.number}>
            <Image src={props.imageSrc} className={props.imageStyle} alt={props.alt}/>
            <div
                className={
                    props.index === props.number
                        ? [
                              styles.backgroundVisible,
                              styles.backgroundOnHover
                          ].join(' ')
                        : styles.backgroundNotVisible
                }
            />
            <div
                className={
                    props.index === props.number
                        ? [styles.textVisible, styles.textOnHover].join(' ')
                        : styles.textHidden
                }>
                {props.children}
            </div>
        </div>
    );
};

export default DesignElement;
