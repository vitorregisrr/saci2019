import React, {useState, Suspense} from 'react';
import {Element} from 'react-scroll';
import {CSSTransition} from 'react-transition-group';

import './Inscricoes.scss';
import TabActions from './Tabs/TabActions/TabActions';
import Spinner from 'components/UI/Spinner/Spinner';
const TabConsulta = React.lazy(() => import ('./Tabs/TabConsulta'));
const TabInscricao = React.lazy(() => import ('./Tabs/TabInscricao'));

const Inscricoes = (props) => {
    const [currentTab,
        setCurrentTab] = useState('actions');

    return (
        <Element name="section-inscricoes">
            <section className="Inscricoes">
                <div className="container">
                    <CSSTransition
                        in={currentTab === 'actions'}
                        timeout={300}
                        unmountOnExit={true}
                        classNames="CSSTransition--fade">
                        <TabActions setTab={setCurrentTab}></TabActions>
                    </CSSTransition>

                    <CSSTransition
                        in={currentTab === 'consulta'}
                        timeout={300}
                        unmountOnExit={true}
                        classNames="CSSTransition--fade">
                        <Suspense fallback={< Spinner fullscreen />}>
                            <TabConsulta setTab={setCurrentTab}/>
                        </Suspense>
                    </CSSTransition>

                    <CSSTransition
                        in={currentTab === 'inscricao'}
                        timeout={300}
                        unmountOnExit={true}
                        classNames="CSSTransition--fade">
                        <Suspense fallback={< Spinner fullscreen />}>
                            <TabInscricao setTab={setCurrentTab}/>
                        </Suspense>
                    </CSSTransition>

                </div>
            </section>
        </Element>
    )
}

export default Inscricoes;