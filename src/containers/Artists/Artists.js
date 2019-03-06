import React, { Component } from 'react';
import styles from './Artists.module.css'
import SectionHeader from '../../components/Typography/SectionHeader/SectionHeader'

class Artists extends Component {
    render() {
        return (
            <>
            <SectionHeader>Meet our artists</SectionHeader>
            <div className={styles.containerMain}>
                <div className={styles.containerArtists}>
                    <div className={styles.artistsList}></div>
                    <div className={styles.artistsImage}></div>
                </div>
            </div>
            </>
        )
    }
}

export default Artists;