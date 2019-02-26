import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navigation/Navbar/Navbar'

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

class Header extends Component {

    state = {
        scrollPositionY: 0,
        messages: ['Design', 'Customize', 'Create'],
        currentMessage: ['Design'],
        index: 0
    }

    componentDidMount(){
        window.addEventListener('scroll', debounce(this.handleScroll, 16))
        this.interval = setInterval(() => this.changeText(), 3000);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', debounce(this.handleScroll, 16))
        clearInterval(this.interval);
    }

    componentDidUpdate() {

    }
    
    changeText = () => {
        if (this.state.index < 2) {
            this.setState(prevState => ({
                index: prevState.index + 1
              }));
            this.setState(prevState => ({
                ...prevState,
                currentMessage: this.state.messages[this.state.index]
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                index: -1
            }))
        }
    }

    handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
      }

    render() {
        const isScrolling = !!this.state.scrollPositionY
        return (
            <>
            <div className={styles.header}>
                <Logo logo={isScrolling ? styles.logoSmall : styles.logo}/>
                <div className={styles.headerText}>
                    <p>{this.state.currentMessage}</p>
                </div>
                <Navbar/>
            </div>
            </>
        )
    }
}

export default Header;