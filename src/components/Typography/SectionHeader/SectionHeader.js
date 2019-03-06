import React from 'react';
import styles from './SectionHeader.module.css';
import HeaderMain from '../HeaderMain/HeaderMain';

const sectionHeader = props => {
    return (
        <div className={styles.headerContainer}>
            <HeaderMain>{props.children}</HeaderMain>
        </div>
    );
};

export default sectionHeader;
