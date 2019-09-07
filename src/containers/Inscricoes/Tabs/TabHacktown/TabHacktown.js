import React, {useState} from 'react';
import {updateFormState} from 'util/updateFormState';
import ReactWOW from 'react-wow';
import {CSSTransition} from 'react-transition-group';

import '../Tabs.scss';
import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const TabHacktown = props => {
    const [isFormValid,
        setisFormValid] = useState(false);

    const [formCtrls,
        setFormCtrls] = useState({
        nomeEquipe: {
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
        integrante1: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 14
            }
        },
        integrante2: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 14
            }
        },
        integrante3: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 14
            }
        }
    });

    const inputChangeHandler = (e, key) => {
        const [newIsFormValid,
            newFormCtrls] = updateFormState(e, key, formCtrls);
        setisFormValid(newIsFormValid);
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
                        <div className="col-lg-3 col-md-6">
                            <FormGroup
                                label="* Nome da equipe"
                                name="nomeEquipe"
                                value={formCtrls.nomeEquipe.value}
                                error={formCtrls.nomeEquipe.validation.error}
                                isInvalid={!formCtrls.nomeEquipe.validation.isValid}
                                isTouched={formCtrls.nomeEquipe.validation.touched}
                                placeholder="Alan Turing"
                                onChangeHandler={inputChangeHandler}/>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                                <FormGroup
                                    label="* CPF Integrante 1"
                                    mask="999.999.999-99"
                                    type="input-mask"
                                    name="integrante1"
                                    value={formCtrls.integrante1.value}
                                    error={formCtrls.integrante1.validation.error}
                                    isInvalid={!formCtrls.integrante1.validation.isValid}
                                    isTouched={formCtrls.integrante1.validation.touched}
                                    placeholder="011.000.101-10"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                                <FormGroup
                                    label="* CPF Integrante 2"
                                    mask="999.999.999-99"
                                    type="input-mask"
                                    name="integrante2"
                                    value={formCtrls.integrante2.value}
                                    error={formCtrls.integrante2.validation.error}
                                    isInvalid={!formCtrls.integrante2.validation.isValid}
                                    isTouched={formCtrls.integrante2.validation.touched}
                                    placeholder="011.000.101-10"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                                <FormGroup
                                    label="* CPF Integrante 3"
                                    mask="999.999.999-99"
                                    type="input-mask"
                                    name="integrante3"
                                    value={formCtrls.integrante3.value}
                                    error={formCtrls.integrante3.validation.error}
                                    isInvalid={!formCtrls.integrante3.validation.isValid}
                                    isTouched={formCtrls.integrante3.validation.touched}
                                    placeholder="011.000.101-10"
                                    onChangeHandler={inputChangeHandler}/>
                            </div>
                        </div>

                        <div className="col-12 py-2 d-flex justify-content-end">
                            <CSSTransition
                                in={isFormValid}
                                timeout={300}
                                unmountOnExit={true}
                                classNames="CSSTransition--fade">
                                <Button variant="primary" classNames="w-100">Inscrever equipe!</Button>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabHacktown;