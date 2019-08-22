import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import './App.scss';
import 'assets/scss/util/__CSSTransitions.scss';

// Import HOCS
import Layout from 'hoc/Layout/Layout'

// Import Components
import Spinner from 'components/UI/Spinner/Spinner';

// Import Containers (Pages)
const Home = React.lazy(() => import ('containers/Home/Home'));
const Inscricoes = React.lazy(() => import ('containers/Inscricoes/Inscricoes'));
const Call4Papers = React.lazy(() => import ('containers/Call4Papers/Call4Papers'));
const Error404 = React.lazy(() => import ('containers/Error/404'));
const Cronograma = React.lazy(() => import ('components/Sections/Cronograma/Cronograma'));

const App = () => {
    const routes = [
        {
            path: '/',
            name: 'Home',
            Component: Home,
            exact: true

        },
         {
            path: '/cronograma',
            name: 'Cronograma',
            Component: Cronograma,
            exact: true

        }, {
            path: '/inscricoes',
            name: 'Inscricoes',
            Component: Inscricoes,
            exact: true

        }, {
            path: '/call4papers',
            name: 'Call4Papers',
            Component: Call4Papers,
            exact: true

        }, {
            path: '/',
            name: 'Error404',
            Component: Error404,
            exact: false
        }
    ];

    return (

        <BrowserRouter basename="/">
            <Layout>
                {routes.map(({path, Component, name, exact}) => (
                    <Route key={name} exact={exact} path={path}>
                        {({match}) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="CSSTransition--fade"
                                unmountOnExit>
                                <div className="page">
                                    <Suspense fallback={< Spinner fullscreen/>}>
                                        <Component/>
                                    </Suspense>
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </Layout>
        </BrowserRouter>

    );
}

export default App;
