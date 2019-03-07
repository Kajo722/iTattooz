import React from 'react';
import Plx from 'react-plx'
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';

const text = [
    {
        start: 'self',
        duration: 500,
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
                <SectionHeader>{props.header}</SectionHeader>
                <SectionDescription>{props.description}</SectionDescription>
        </Plx>
  


  


    );
};

export default Section;
