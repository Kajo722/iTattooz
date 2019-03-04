import React from 'react';
import styles from './HeaderSecondary.module.css';

const headerSecondary = props => {
    return <h3 className={styles.headerSecondary}>{props.children}</h3>;
};

export default headerSecondary;
