import React, {useState, Suspense} from 'react';

import './Inscricoes.scss';
import TabActions from './Tabs/TabActions';
import Spinner from 'components/UI/Spinner/Spinner';
const TabConsulta = React.lazy(() => import ('./Tabs/TabConsulta'));
const TabInscricao = React.lazy(() => import ('./Tabs/TabInscricao'));

const Inscricoes = (props) => {
    const [currentTab,
        setCurrentTab] = useState('actions');

    return (
        <section className="Inscricoes">
            <div className="container">
                {currentTab === 'actions'
                    ? <TabActions setTab={setCurrentTab}></TabActions>
                    : ''
}

                {currentTab === 'consulta'
                    ? <Suspense fallback={< Spinner fullscreen />}>
                            <TabConsulta/>
                        </Suspense>
                    : ''
}

                {currentTab === 'inscricao'
                    ? <Suspense fallback={< Spinner fullscreen />}>
                            <TabInscricao/>
                        </Suspense>
                    : ''
}
            </div>
        </section>
    )
}

export default Inscricoes;