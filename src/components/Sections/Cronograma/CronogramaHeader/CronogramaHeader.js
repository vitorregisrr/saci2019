import React from 'react';
import {Link, Element} from 'react-scroll';

import './CronogramaHeader.scss';

const CronogramaHeader = () => {
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
                <Link
                    activeClass="active"
                    smooth={true}
                    to="cronograma-dia-1"
                    offset={-30}
                    className="Cronograma__header__anchors__item">Dia 1</Link>

                <Link
                    activeClass="active"
                    smooth={true}
                    to="cronograma-dia-2"
                    offset={-30}
                    className="Cronograma__header__anchors__item">Dia 2</Link>

                <Link
                    activeClass="active"
                    smooth={true}
                    to="cronograma-dia-3"
                    offset={-30}
                    className="Cronograma__header__anchors__item">Dia 3</Link>
            </div>
        </header>
    )
}

export default CronogramaHeader;