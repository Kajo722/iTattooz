import React from 'react';
import styles from './PageHeaderContainer.module.css';

const privacy = props => {
    return <div className={styles.container}>{props.children}</div>;
};

export default privacy;
