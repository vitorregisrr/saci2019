import React from 'react';
import {Link} from 'react-scroll';

import './CronogramaHeader.scss';

const CronogramaHeader = (props) => {

    const headerAnchors = [];
    
    for (let x = 1; x <= props.numeroDias; x++) {
        headerAnchors.push(
            <Link
                activeClass="active"
                smooth={true}
                to={`cronograma-dia-${x}`}
                key={`anchor-dia-${x}`}
                offset={-30}
                className="Cronograma__header__anchors__item">Dia {x}</Link>
        )
    }

    return (
        <header className="Cronograma__header">
            <h4 className="Cronograma__header__subtitle">
                Conheça os palestrantes
            </h4>
            <h3 className="Cronograma__header__title">
                Cronograma de atividades
            </h3>
            <div className="Cronograma__header__anchors">
                <label>Pular para:</label>
                {headerAnchors}
            </div>
        </header>
    )
}

export default CronogramaHeader;