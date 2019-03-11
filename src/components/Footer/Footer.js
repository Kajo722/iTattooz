import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkItem from '../Navigation/Navbar/LinkItem/LinkItem';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <section className={styles.footerSection}>
                    <div className={styles.footerInfo}>
                        <ul className={styles.footerList}>
                            <LinkItem linkTo={'terms'}>
                                Terms & Conditions
                            </LinkItem>
                            <LinkItem linkTo={'cookie'}>Cookie Policy</LinkItem>
                            <LinkItem linkTo={'privacy'}>
                                Privacy Policy
                            </LinkItem>
                            <LinkItem linkTo={'contact'}>Contact Us</LinkItem>
                        </ul>
                        <Logo logo={styles.logo} />
                    </div>
                    <div className={styles.copyright}>
                        Copyright by Karol Michalak 2019
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;
