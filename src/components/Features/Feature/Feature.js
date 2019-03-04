import React from 'react'
import styles from './Feature.module.css';

const feature = (props) => {
    return (
        <div className={styles.feature}>{props.children}</div>
    )
}

export default feature;