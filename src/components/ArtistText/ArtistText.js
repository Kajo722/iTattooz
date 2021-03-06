import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArtistText.module.css';

const artistText = props => {
    return (
        <div
            onMouseEnter={props.hoverOn}
            onMouseLeave={props.hoverOff}
            className={styles.text}>
            <div className={props.underline}>
                <Link to='artists' className={styles.link}>
                    {props.children}

                    <div
                        className={
                            props.index === props.number
                                ? [styles.underline, styles.visible].join(' ')
                                : styles.underline
                        }
                    />
                </Link>
            </div>
        </div>
    );
};

export default artistText;
