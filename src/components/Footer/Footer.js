import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkItem from '../Navigation/Navbar/LinkItem/LinkItem';
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <section className={styles.footerSection}>
                    <div className={styles.footerInfo}>
                        <ul className={styles.footerList}>
                            <li>
                                <Link to='terms'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to='cookie'>Cookie Policy</Link>
                            </li>
                            <li>
                                <Link to='privacy'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='contact'>Contact Us</Link>
                            </li>
                        </ul>
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
