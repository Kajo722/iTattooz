import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};
class Logo extends Component {
    state = {
        scrollPositionY: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.handleScroll, 16));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', debounce(this.handleScroll, 16));
    }

    handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY;
        return this.setState({ scrollPositionY });
    };

    render() {
        const isScrolling = !!this.state.scrollPositionY;
        return (
            <div className={isScrolling ? styles.logoSmall : styles.logo}>
                <Link to='/'>iTatt<span className={styles.span}>o</span>oz</Link>
            </div>
        );
    }
}

export default Logo;
