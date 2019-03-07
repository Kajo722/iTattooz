import React, {Component} from 'react'
import Header from './Header/Header'
import About from './About/About';
import HowItWorks from './HowItWorks/HowItWorks';
import Designs from './Designs/Designs';
import Artists from './Artists/Artists';
import Ending from './Ending/Ending'

class MainPage extends Component {
    render() {
        return (
            <>
            <Header />
                    <About />
                    <HowItWorks />
                    <Designs />
                    <Artists/>
                    <Ending/>
            </>
        );
    }
}
export default MainPage;