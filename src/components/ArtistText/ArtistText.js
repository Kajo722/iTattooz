import React from 'react';
import styles from './ArtistText.module.css';

const artistText = props => {
    return (
        <div
            onMouseEnter={props.hoverOn}
            onMouseLeave={props.hoverOff}
            className={styles.text}>
            {props.children}
            <div className={props.index === props.number ? [styles.underline, styles.visible].join(' ') : styles.underline} />
        </div>
    );
};

export default artistText;
