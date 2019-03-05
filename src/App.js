import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout';
import About from './containers/About/About';
import HowItWorks from './containers/HowItWorks/HowItWorks';
class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <About />
                    <HowItWorks />
                </Layout>
            </>
        );
    }
}
export default App;
