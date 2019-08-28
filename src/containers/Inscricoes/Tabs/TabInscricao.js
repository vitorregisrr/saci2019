import React from 'react';
import InputMask from 'react-input-mask';

import './Tabs.scss';

const TabInscricao = props => {
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

                <div className="row">
                    <div className="col-lg-4 col-md-7">
                        <div className="form-group">
                            <label htmlFor="inputName">Nome Completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Alan Turing"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-7">
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="inputEmail"
                            placeholder="reidacomputacao@gmail.com"/>
                        </div>
                    </div>

                    <div className="col-6 col-lg-2 col-md-4">
                        <div className="form-group">
                            <label htmlFor="inputCPF">CPF</label>
                            <InputMask
                                mask="999.999.999-99" 
                                type="text"
                                className="form-control"
                                id="inputCPF"
                                placeholder="011.000.101-10"/>
                        </div>
                    </div>

                    <div className="col-6 col-lg-2 col-md-4">
                        <div className="form-group">
                            <label htmlFor="inputNasc">Data Nasc.</label>
                            <InputMask
                                mask="99/99/9999" 
                                type="text"
                                className="form-control"
                                id="inputNasc"
                                placeholder="25/06/1912"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TabInscricao;