import React from 'react'
import styles from './PageHeader.module.css'

const privacy = (props) => {
    return(
            <div className={styles.header}>
                <h1>{props.children}</h1>
            </div>
 
    )
}

export default privacy;