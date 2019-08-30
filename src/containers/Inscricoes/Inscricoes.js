import React, {useState, Suspense} from 'react';
import {Element} from 'react-scroll';
import {CSSTransition} from 'react-transition-group';

import './Inscricoes.scss';
import TabActions from './Tabs/TabActions/TabActions';
import Spinner from 'components/UI/Spinner/Spinner';
import Modal from 'components/UI/Modal/Modal';
const TabConsulta = React.lazy(() => import ('./Tabs/TabConsulta'));
const TabInscricao = React.lazy(() => import ('./Tabs/TabInscricao'));
const TabHacktown = React.lazy(() => import ('./Tabs/TabHacktown'));

const Inscricoes = (props) => {
    const [modalStatus,
        setModalStatus] = useState(false);

    const [currentTab,
        setCurrentTab] = useState('actions');

    // const setCurrentTab = () => {     setModalStatus(true); }

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

                    <CSSTransition
                        in={currentTab === 'hacktown'}
                        timeout={300}
                        unmountOnExit={true}
                        classNames="CSSTransition--fade">
                        <Suspense fallback={< Spinner fullscreen />}>
                            <TabHacktown setTab={setCurrentTab}/>
                        </Suspense>
                    </CSSTransition>

                </div>
            </section>
            <Modal setStatus={setModalStatus} active={modalStatus}>
                <h3 className="title">Oops, as inscrições ainda não foram liberadas!</h3>
                <p className="desc">Ainda estamos trabalhando nessa função, as inscrições serão
                    liberadas em breve! Por enquanto, fique de olho no nosso facebook :)</p>
            </Modal>
        </Element>
    )
}

export default Inscricoes;