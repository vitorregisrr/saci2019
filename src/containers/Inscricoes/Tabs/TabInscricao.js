import React, {useState} from 'react';
import {updateFormState} from 'util/updateFormState';
import {CSSTransition} from 'react-transition-group';
import ReactWOW from 'react-wow';

import './Tabs.scss';
import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const TabInscricao = props => {
    const [isFormValid,
        setIsFormValid] = useState(false);

    const [formCtrls,
        setFormCtrls] = useState({
        nome: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 7,
                isCPF: true
            }
        },

        email: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                isEmail: true
            }
        },

        dataNasc: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 10
            }
        },

        cpf: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 14
            }
        },

        instituicao: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
            }
        },

        curso: {
            value: '',
            validation: {
                required: false,
                isValid: false,
                error: '',
                touched: false,
            }
        },

        turno: {
            value: '',
            validation: {
                required: false,
                isValid: false,
                error: '',
                touched: false,
            }
        }
    });

    const inputChangeHandler = (e, key, isSelect) => {
        const [newIsFormValid,
            newFormCtrls] = updateFormState(e, key, formCtrls, isSelect);
        setIsFormValid(newIsFormValid);
        setFormCtrls(newFormCtrls);
    }

    return (
        <section className="Inscricoes__tab float">
            <ReactWOW animation="fadeIn">

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
                        <div className="col-lg-4 col-md-6">
                            <FormGroup
                                label="* Nome Completo"
                                name="nome"
                                value={formCtrls.nome.value}
                                error={formCtrls.nome.validation.error}
                                isInvalid={!formCtrls.nome.validation.isValid}
                                isTouched={formCtrls.nome.validation.touched}
                                placeholder="Alan Turing"
                                onChangeHandler={inputChangeHandler}/>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <FormGroup
                                    label="* Email"
                                    name="email"
                                    value={formCtrls.email.value}
                                    error={formCtrls.email.validation.error}
                                    isInvalid={!formCtrls.email.validation.isValid}
                                    isTouched={formCtrls.email.validation.touched}
                                    placeholder="reidacomputacao@gmail.com"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <div className="form-group">
                                <FormGroup
                                    label="* CPF"
                                    mask="999.999.999-99"
                                    type="input-mask"
                                    name="cpf"
                                    value={formCtrls.cpf.value}
                                    error={formCtrls.cpf.validation.error}
                                    isInvalid={!formCtrls.cpf.validation.isValid}
                                    isTouched={formCtrls.cpf.validation.touched}
                                    placeholder="011.000.101-10"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <div className="form-group">
                                <FormGroup
                                    label="* Data nasc."
                                    mask="99/99/9999"
                                    type="input-mask"
                                    name="dataNasc"
                                    placeholder="25/06/1912"
                                    value={formCtrls.dataNasc.value}
                                    error={formCtrls.dataNasc.validation.error}
                                    isInvalid={!formCtrls.dataNasc.validation.isValid}
                                    isTouched={formCtrls.dataNasc.validation.touched}
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="form-group">
                                <FormGroup
                                    label="* Instituição"
                                    type="select"
                                    options={[
                                    {
                                        value: 'ifsul-bage',
                                        label: 'IFsul - Campus Bagé'
                                    },
                                    {
                                        value: 'ifsul-pelotas',
                                        label: 'IFsul - Campus Pelotas'
                                    },
                                    {
                                        value: 'unipampa',
                                        label: 'Unipampa'
                                    }, {
                                        value: 'urcamp',
                                        label: 'Urcamp'
                                    }, {
                                        value: 'ideau',
                                        label: 'IDEAU'
                                    }, {
                                        value: 'Unicesumar',
                                        label: 'Unicesumar'
                                    }, {
                                        value: 'Estácio',
                                        label: 'Estácio'
                                    }
                                ].sort((a,b) => a.label > b.label ? 1 : -1 )}
                                    name="instituicao"
                                    placeholder="The University of Manchester"
                                    value={formCtrls.instituicao.value}
                                    error={formCtrls.instituicao.validation.error}
                                    isInvalid={!formCtrls.instituicao.validation.isValid}
                                    isTouched={formCtrls.instituicao.validation.touched}
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-12 py-2 d-flex justify-content-end">
                            <CSSTransition
                                in={isFormValid}
                                timeout={300}
                                unmountOnExit={true}
                                classNames="CSSTransition--fade">
                                <Button variant="primary" classNames="w-100">Me inscreva!</Button>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabInscricao;