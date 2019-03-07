import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../src/hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage'
import Artists from './containers/Artists/Artists'
import Career from './containers/Career/Career'
import ContactUs from './containers/ContactUs/ContactUs'
import Terms from './containers/Terms/Terms'
import Cookie from './containers/Cookie/Cookie'
import Privacy from './containers/Privacy/Privacy'

class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/artists' exact component={Artists} />
                    <Route path='/career' exact component={Career} />
                    <Route path='/contact' exact component={ContactUs} />
                    <Route path='/terms' exact component={Terms} />
                    <Route path='/cookie' exact component={Cookie} />
                    <Route path='/privacy' exact component={Privacy} />
                    </Switch>
                </Layout>
            </>
        );
    }
}
export default App;
