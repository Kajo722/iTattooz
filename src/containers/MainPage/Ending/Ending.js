import React, { Component } from 'react';
import styles from './Ending.module.css';
import { Link } from 'react-router-dom';
import Section from '../../../components/Typography/Section/Section';

class Ending extends Component {
    render() {
        return (
            <>
                <Section
                    header={'Ready to get started?'}
                    description={
                        'Join the revolution of tattoo creation and become the designer of your own tattoo.'
                    }
                />
                <button className={styles.container}>
                    <Link to='contact'>Contact us for details!</Link>
                </button>
            </>
        );
    }
}
export default Ending;
