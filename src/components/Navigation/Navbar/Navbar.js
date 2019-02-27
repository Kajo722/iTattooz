import React, {Component} from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component {

    state = {
        active: false,
    }

    onClickNavbar = () => {
        this.setState(prevState => ({
            ...prevState,
            active: !this.state.active
        }))
    }

    render()    {
        return(
            <div className={styles.navbar}>
                <div onClick={this.onClickNavbar} className={`${styles.hamburger} ${this.state.active ? styles.change : ''} ${styles.hamburger}`}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
                <ul className={`${styles.navbarNav} ${this.state.active ? styles.visibility : ''}`}>
                    <li className={`${styles.link1} ${this.state.active ? styles.opacity : ''}`}><a href='/'>Home</a></li>
                    <li className={`${styles.link2} ${this.state.active ? styles.opacity : ''}`}><a href='/'>Artists</a></li>
                    <li className={`${styles.link3} ${this.state.active ? styles.opacity : ''}`}><a href='/'>Career</a></li>
                    <li className={`${styles.link4} ${this.state.active ? styles.opacity : ''}`}><a href='/'>Contact Us</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;