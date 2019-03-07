import React from 'react';
import Plx from 'react-plx';
import styles from './Section.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';

const text = [
    {
        start: 'self',
        duration: 300,
        properties: [
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
    {
        start: 'self',
        duration: 200,
        properties: [
            {
                startValue: -30,
                endValue: 1,
                property: 'translateY'
            }
        ]
    }
];

const Section = props => {
    return (
        <Plx parallaxData={text}>
            <div className={styles.sectionContainer}>
                <SectionHeader>{props.header}</SectionHeader>
                <SectionDescription>{props.description}</SectionDescription>
            </div>
        </Plx>
    );
};

export default Section;
