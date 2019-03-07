import React from 'react';
import styles from './SectionDescription.module.css';


const SectionDescription = props => {
    return (
        <div className={styles.description}>
            {props.children}
        </div>
    );
};

export default SectionDescription;
