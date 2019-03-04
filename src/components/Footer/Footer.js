import React, { Component } from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <section className={styles.footerSection}>
                    <div className={styles.footerInfo}>
                        <ul className={styles.footerList}>
                            <li>
                                <a href='/'>Terms & Conditions</a>
                            </li>
                            <li>
                                <a href='/'>Cookie Policy</a>
                            </li>
                            <li>
                                <a href='/'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='/'>Contact Us</a>
                            </li>
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
