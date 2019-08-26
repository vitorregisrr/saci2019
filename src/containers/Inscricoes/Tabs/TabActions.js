import React from 'react';

const TabOptions = props => {
    return (
        <section className="Inscricoes__actions Inscricoes__tab">
            <button
                onClick={() => props.setTab('inscricao')}
                className="Inscricoes__actions__item"></button>

            <button
                onClick={() => props.setTab('consulta')}
                className="Inscricoes__actions__item"></button>
        </section>
    )
}

export default TabOptions;