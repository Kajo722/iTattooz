import React, { Component } from 'react';
import styles from './Navbar.module.css';
import LinkList from './LinkList/LinkList';
import LinkItem from './LinkItem/LinkItem';

class Navbar extends Component {
    state = {
        active: false
    };

    onClickNavbar = () => {
        this.setState(prevState => ({
            ...prevState,
            active: !this.state.active
        }));
    };

    render() {
        return (
            <div className={styles.navbar}>
                <div
                    onClick={this.onClickNavbar}
                    className={`${styles.hamburger} ${
                        this.state.active ? styles.change : ''
                    } ${styles.hamburger}`}>
                    <div className={styles.bar1} />
                    <div className={styles.bar2} />
                    <div className={styles.bar3} />
                </div>
                <LinkList
                    style={`${styles.navbarNav} ${
                        this.state.active ? styles.visibility : ''
                    }`}>
                    <LinkItem
                        link='/'
                        style={`${styles.link1} ${
                            this.state.active ? styles.opacity : ''
                        }`}>
                        Home
                    </LinkItem>
                    <LinkItem
                        link='/'
                        style={`${styles.link2} ${
                            this.state.active ? styles.opacity : ''
                        }`}>
                        Artists
                    </LinkItem>
                    <LinkItem
                        link='/'
                        style={`${styles.link3} ${
                            this.state.active ? styles.opacity : ''
                        }`}>
                        Career
                    </LinkItem>
                    <LinkItem
                        link='/'
                        style={`${styles.link4} ${
                            this.state.active ? styles.opacity : ''
                        }`}>
                        Contact Us
                    </LinkItem>
                </LinkList>
            </div>
        );
    }
}

export default Navbar;
