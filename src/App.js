import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../src/hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import Artists from './containers/Artists/Artists';
import Career from './containers/Career/Career';
import ContactUs from './containers/ContactUs/ContactUs';
import Terms from './containers/Terms/Terms';
import Cookie from './containers/Cookie/Cookie';
import Privacy from './containers/Privacy/Privacy';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};
class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Route component={ScrollToTop} />
                    <Switch>
                        <Route path='/artists' component={Artists} />
                        <Route path='/career' component={Career} />
                        <Route path='/contact' component={ContactUs} />
                        <Route path='/terms' component={Terms} />
                        <Route path='/cookie' component={Cookie} />
                        <Route path='/privacy' component={Privacy} />
                        <Route path='/' exact component={MainPage} />
                        <Redirect to='/' />
                    </Switch>
                </Layout>
            </>
        );
    }
}
export default App;
