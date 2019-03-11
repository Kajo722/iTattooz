import React, { Component } from 'react';
import styles from './Layout.module.css';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/UI/LeftSidebar/LeftSidebar';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navigation/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <>
                <div className={styles.root}>
                    <div className={styles.main}>
                        <div className={styles.mainGrid}>
                            <Logo />
                            <Navbar />
                            <LeftSidebar />
                            <main className={styles.content}>
                                {this.props.children}
                            </main>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
