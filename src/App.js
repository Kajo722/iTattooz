import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout';
import About from './containers/About/About';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import Designs from './containers/Designs/Designs';
class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <About />
                    <HowItWorks />
                    <Designs />
                </Layout>
            </>
        );
    }
}
export default App;
