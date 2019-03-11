import React, { Component } from 'react';
import styles from './ContactUs.module.css';
import PageHeaderContainer from '../../components/PagesHeader/PageHeaderContainer/PageHeaderContainer';
import PageHeader from '../../components/PagesHeader/PageHeader/PageHeader';
import Image from '../../components/Image/Image';
import img from '../../assets/Images/contactUs.jpg';

class ContactUs extends Component {
    render() {
        return (
            <>
                <PageHeaderContainer>
                    <PageHeader>Contact Us</PageHeader>
                </PageHeaderContainer>
                <div className={styles.containerMain}>
                    <div className={styles.containerGrid}>
                        <div className={styles.info}>
                            <h3>iTattoz</h3>
                            <div style={{ marginBottom: '3rem' }}>
                                <p>00-000 sadfxczvxzc street,</p>
                                <p>Warsaw sadfxczvxzc street,</p>
                            </div>
                            <div className={styles.underline}>
                                <p>asdfasdfsdafsadasfasd</p>
                                <p>itattozdesign@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={img} className={styles.image} />
                        </div>
                        <div className={styles.ending}>
                            <h3>Join the revolution of tattoo designs!</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ContactUs;
