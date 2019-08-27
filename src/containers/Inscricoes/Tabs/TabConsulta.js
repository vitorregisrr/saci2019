import React from 'react';

import './Tabs.scss';

const TabConsulta = props => {
    return (
        <section className="Inscricoes__tab float">
            <div className="Inscricoes__tab__header">
                <button
                    className="Inscricoes__tab__back btn-transparent"
                    onClick={() => props.setTab('actions')}>
                    <span className="ico"></span>
                    Voltar
                </button>
            </div>
            <div className="Inscricoes__tab__body">

                <div className="row justify-content-center">
                    <div className="col-6 col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="inputCPF">CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCPF"
                                placeholder="011.000.101-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabConsulta;