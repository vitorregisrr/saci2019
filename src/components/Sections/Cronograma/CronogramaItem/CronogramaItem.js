import React from 'react';
import './CronogramaItem.scss';

const CronogramaItem = (props) => {
    return (
        <article className={`Cronograma__item ${props.tipo}`}>
            <div className="Cronograma__item__horario">
                {props.horario.inicio} - {props.horario.fim}
            </div>

            {props.tipo === 'Palestra' || props.tipo === 'Oficina'
                ? <div className="Cronograma__item__atividade">
                        <div className="Cronograma__item__atividade__img">
                            <img
                                src={props.realizador.img}
                                alt={`Foto do palestrante ${props.realizador.nome}`}/>
                        </div>
                        <div className="Cronograma__item__atividade__caption">
                            <h5 className="Cronograma__item__atividade__caption__nome">
                                {props.realizador.nome}
                            </h5>
                            <hr/>
                            <h5 className="Cronograma__item__atividade__caption__cargo">
                                {props.realizador.cargo}
                            </h5>

                            <h3 className="Cronograma__item__atividade__caption__titulo">
                                <span class="font-weight-light mr-1 font-weight-lighter">
                                    Na {props.tipo}:
                                </span>
                                <i>
                                    {props.titulo}
                                </i>
                            </h3>
                        </div>
                    </div>
                : <div
                    className={`Cronograma__item__titulo ${props.tipo} ${props.tipo === 'soon'
                    ? 'float mt-2'
                    : ''}`}>
                    {props.titulo}
                </div>}
        </article>
    )
}

export default CronogramaItem;