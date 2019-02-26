import React from 'react';
import styles from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={props.logo}>
            iTatt<span className={styles.span}>o</span>oz
        </div>
    )
}

export default logo;