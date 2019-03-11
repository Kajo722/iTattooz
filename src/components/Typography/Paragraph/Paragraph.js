import React from 'react';
import styles from './Paragraph.module.css';

const paragraph = props => {
    return (
        <p style={props.style} className={styles.paragraph}>
            {props.children}
        </p>
    );
};

export default paragraph;
