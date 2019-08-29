import React, {useState} from 'react';
import {updateFormState} from 'util/updateFormState';
import ReactWOW from 'react-wow';

import './Tabs.scss';
import FormGroup from 'components/UI/Form/FormGroup';

const TabInscricao = props => {
    const [isFormValid,
        setisFormValid] = useState(false);

    const [formCtrls,
        setFormCtrls] = useState({
        nome: {
            value: '',
            validation: {
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
                isValid: false,
                error: '',
                touched: false,
                isEmail: true
            }
        },

        dataNasc: {
            value: '',
            validation: {
                isValid: false,
                error: '',
                touched: false,
                minLength: 10
            }
        },

        cpf: {
            value: '',
            validation: {
                isValid: false,
                error: '',
                touched: false,
                minLength: 14
            }
        },

        instituicao: {
            value: '',
            validation: {
                isValid: false,
                error: '',
                touched: false,
                minLength: 2
            }
        }
    });

    const inputChangeHandler = (e, key) => {
        const [newIsFormValid, newFormCtrls] = updateFormState(e, key, formCtrls);
        setisFormValid(newIsFormValid);
        setFormCtrls(newFormCtrls);
    }

    return (
        <section className="Inscricoes__tab float">
            <ReactWOW animation="fadeInUp">

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
                                label="Nome Completo"
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
                                    label="Email"
                                    name="email"
                                    value={formCtrls.email.value}
                                    error={formCtrls.email.validation.error}
                                    isInvalid={!formCtrls.email.validation.isValid}
                                    isTouched={formCtrls.email.validation.touched}
                                    placeholder="reidacomputacao@gmail.com"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-4">
                            <div className="form-group">
                                <FormGroup
                                    label="CPF"
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

                        <div className="col-6 col-lg-2 col-md-4">
                            <div className="form-group">
                                <FormGroup
                                    label="Data nasc."
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

                    </div>
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabInscricao;