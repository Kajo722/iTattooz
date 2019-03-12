import React, { Component } from 'react';
import styles from './Navbar.module.css';
import LinkList from './LinkList/LinkList';
import LinkItem from './LinkItem/LinkItem';

class Navbar extends Component {
    state = {
        active: false,
        links: [
            { id: 1, style: styles.link1, text: 'Home', link: '/' },
            { id: 2, style: styles.link2, text: 'Artists', link: 'artists' },
            { id: 3, style: styles.link3, text: 'Career', link: 'career' },
            { id: 4, style: styles.link4, text: 'Contact Us', link: 'contact' }
        ]
    };

    onClickNavbar = () => {
        this.setState(prevState => ({
            ...prevState,
            active: !this.state.active
        }));
    };

    render() {
        const links = this.state.links.map(link => {
            return (
                <LinkItem
                    click={this.onClickNavbar}
                    key={link.id}
                    style={`${link.style} ${
                        this.state.active ? styles.opacity : ''
                    }`}
                    linkTo={link.link}>
                    {link.text}
                </LinkItem>
            );
        });
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
                    {links}
                </LinkList>
            </div>
        );
    }
}

export default Navbar;
