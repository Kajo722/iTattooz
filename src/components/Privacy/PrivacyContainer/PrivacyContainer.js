import React from 'react'
import styles from './PrivacyContainer.module.css'

const privacy = (props) => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default privacy;