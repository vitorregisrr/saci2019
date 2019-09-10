import React from 'react';
import ReactWOW from 'react-wow';

import './TabActions.scss';

const TabOptions = props => {
    return (
        <section className="Inscricoes__actions Inscricoes__tab pt-3 pt-lg-5">
            <div className="row justify-content-center float">
                <div className="col-lg-5 mr-lg-3 mb-4 mb-lg-0">
                    <ReactWOW animation="fadeIn">
                        <button
                            onClick={() => props.setTab('inscricao')}
                            className="Inscricoes__action">
                            <h3 className="Inscricoes__action__title">
                                <span className="ico pen"></span>
                                Realizar inscrição
                            </h3>

                            <p className="Inscricoes__action__desc">
                                Ainda não realizei minha inscrição.
                            </p>

                        </button>
                    </ReactWOW>
                </div>
                <div className="col-lg-5">
                    <ReactWOW animation="fadeIn">
                        <button onClick={() => props.setTab('consulta')} className="Inscricoes__action">
                            <h3 className="Inscricoes__action__title">
                                <span className="ico eye"></span>
                                Verificar inscrição
                            </h3>

                            <p className="Inscricoes__action__desc">
                                Já realizei minha inscrição e gostaria de verifica-la.
                            </p>
                        </button>
                    </ReactWOW>
                </div>
                <div className="col-lg-11 mt-4">
                    <ReactWOW animation="fadeIn">
                        <button
                            onClick={() => props.setTab('hacktown')}
                            className="Inscricoes__action lg">
                            <h3 className="Inscricoes__action__title">
                                <span className="ico code"></span>
                                Inscrições para o Hackathon EducaDev
                            </h3>

                            <p className="Inscricoes__action__desc">
                                Gostaria de cadastrar ou verificar o status da minha equipe.
                            </p>
                        </button>
                    </ReactWOW>
                </div>
            </div>
        </section>
    )
}

export default TabOptions;