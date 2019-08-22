import React from 'react';
import {Sticky, StickyContainer} from 'react-sticky';

import CronogramaItem from '../CronogramaItem/CronogramaItem';
import './CronogramaDia.scss';

const CronogramaDia = (props) => {
    return (
        <section className="Cronograma__dia">
            <div className="row">
                <div className="col-3 col-md-4 col-lg-3">
                    <StickyContainer className="h-100">
                        <Sticky topOffset={-80}>
                            {({style, isSticky}) => 
                                <div className={`Cronograma__dia__title ${isSticky ? 'pt-5 mt-5' : ''}`} style={style}>
                                    <span>Agenda</span>
                                    Dia {props.diaNumero}
                                    <hr/>
                                </div>
                            }
                        </Sticky>
                    </StickyContainer>
                </div>
                <div className="col-auto">
                    <div className="Cronograma__dia__atividades">
                        {props.atividades
                            ? props
                                .atividades
                                .map(atividade => <CronogramaItem tipo="" titulo="" tipo=""/>)
                            : <h3 class="coming-soon float pt-3">Em breve</h3>
}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CronogramaDia;