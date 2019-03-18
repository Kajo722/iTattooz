import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../src/hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
const Suspense = React.Suspense;
const MainPage = React.lazy(() => import('./containers/MainPage/MainPage'));
const Artists = React.lazy(() => import('./containers/Artists/Artists'));
const Career = React.lazy(() => import('./containers/Career/Career'));
const ContactUs = React.lazy(() => import('./containers/ContactUs/ContactUs'));
const Terms = React.lazy(() => import('./containers/Terms/Terms'));
const Cookie = React.lazy(() => import('./containers/Cookie/Cookie'));
const Privacy = React.lazy(() => import('./containers/Privacy/Privacy'));

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
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route path='/artists' render={() => <Artists />} />
                            <Route path='/career' render={() => <Career />} />
                            <Route
                                path='/contact'
                                render={() => <ContactUs />}
                            />
                            <Route path='/terms' render={() => <Terms />} />
                            <Route path='/cookie' render={() => <Cookie />} />
                            <Route path='/privacy' render={() => <Privacy />} />
                            <Route path='/' exact render={() => <MainPage />} />
                            <Redirect to='/' />
                        </Switch>
                    </Suspense>
                </Layout>
            </>
        );
    }
}
export default App;
