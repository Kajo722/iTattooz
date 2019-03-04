import React from 'react';
import styles from './HeaderMain.module.css';

const headerMain = props => {
    return <h2 className={styles.headerMain}>{props.children}</h2>;
};

export default headerMain;
