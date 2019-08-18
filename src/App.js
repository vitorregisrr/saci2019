import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Layout from './hoc/Layout'

const Home = React.lazy(() => import ('./containers/Home/Home'));
const Inscricoes = React.lazy(() => import ('./containers/Inscricoes/Inscricoes'));
const Call4Papers = React.lazy(() => import ('./containers/Call4Papers/Call4Papers'));
const Error404 = React.lazy(() => import ('./containers/Error/404'));

const App = () => {
    return (
        <Layout>
            <BrowserRouter basename="/">
                <Switch>

                    <Route
                        exact
                        path="/"
                        component={() => <Suspense fallback={< Spinner />}><Home/></Suspense>}/>

                    <Route
                        exact
                        path="/inscricoes"
                        component={() => <Suspense fallback={< Spinner />}><Inscricoes/></Suspense>}/>

                    <Route
                        exact
                        path="/inscricoes"
                        component={() => <Suspense fallback={< Spinner />}><Call4Papers/></Suspense>}/>
                    <Route
                        path="/"
                        component={() => <Suspense fallback={< Spinner />}><Error404/></Suspense>}/>

                </Switch>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
