import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout'
import About from './containers/About/About'

class App extends Component {
  render() {
    return (
      <>
      <Layout>
        <About />
      </Layout>
      </>
    );
  }
}
export default App;
