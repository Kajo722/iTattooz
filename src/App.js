import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout';
import About from './containers/About/About';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import Plx from 'react-plx';

const opacity = [
    {
        start: 'self',
        end: '100%',
        properties: [
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
    {
        start: 'self',
        end: '100%',
        properties: [
            {
                startValue: -70,
                endValue: 0,
                property: 'translateY'
            }
        ]
    }
];
class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <About />
{/*                     <Plx parallaxData={opacity}> */}
                    <HowItWorks />
  {/*                   </Plx> */}

                </Layout>
            </>
        );
    }
}
export default App;
