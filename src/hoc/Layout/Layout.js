import React, { Component } from 'react';
import styles from './Layout.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../containers/Header/Header';
import LeftSidebar from '../../components/UI/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/UI/RightSidebar/RightSidebar';

class Layout extends Component{
    render() {
        return (
            <>
            <div className={styles.root}>
                <div className={styles.main}>
                    <div className={styles.mainGrid}>
                        <Header />
                        <LeftSidebar />
                        <RightSidebar />
                        <main className={styles.content}>
                            {this.props.children}
                        </main>
                    </div>
                    <Footer />
                </div>
            </div>
            </>
        )
    }
}

export default Layout;