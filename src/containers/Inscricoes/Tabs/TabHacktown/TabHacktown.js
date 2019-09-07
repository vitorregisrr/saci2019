import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import axios from 'axios.instance';

import '../Tabs.scss';
import Spinner from 'components/UI/Spinner/Spinner';
import Button from 'components/UI/Button/Button';
import HacktownForm from './HacktownForm';
import {updateFormState} from 'util/updateFormState';

const TabHacktown = props => {

    const defaultFormCtrls = {
        nome: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 3,
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
    };

    const [isFetching,
        setIsFetching] = useState(false);

    const [hasError,
        setHasError] = useState(false);

    const [fetchData,
        setFetchData] = useState(false);

    const [fetchError,
        setFetchError] = useState(false);

    const [isFormValid,
        setIsFormValid] = useState(false);

    const [formCtrls,
        setFormCtrls] = useState(defaultFormCtrls);

    const inputChangeHandler = (e, key, isSelect) => {
        if (isSelect) {
            const newFormCtrls = {
                ...formCtrls
            };
            if (e.value === 'ifsul-bage') {
                newFormCtrls.semestre.validation.required = true;
                newFormCtrls.curso.validation.required = true;
            } else {
                newFormCtrls.semestre.validation.required = false;
                newFormCtrls.curso.validation.required = false;
            }

            setFormCtrls(newFormCtrls);
        }

        const [newIsFormValid,
            newFormCtrls] = updateFormState(e, key, formCtrls, isSelect);
        setIsFormValid(newIsFormValid);
        setFormCtrls(newFormCtrls);
    }

    const fetchInscricao = () => {
        setIsFetching(true);
        axios.post('/enroll', {
            name: formCtrls.nome.value,
            cpf: formCtrls.cpf.value,
            email: formCtrls.email.value,
            birthdate: Date.parse(formCtrls.dataNasc.value),
            institution: formCtrls.instituicao.value
        }).then(response => {
            setHasError(false);
            fetchData(response);
        }).catch(error => {
            setHasError(true);
            setFetchError(error);
        }). finally(() => {
            setIsFetching(false);
        })
    }

    const resetForm = () => {
        setFetchData(false);
        setFormCtrls(defaultFormCtrls);
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
                    {isFetching
                        ? <Spinner color="primary" classNames="mt-5"/>
                        : fetchData
                            ? <div class="success">
                                    <span className="success__icon"></span>
                                    <p className="success__caption">
                                        Eba! Sua equipe foi realizada com sucesso, aguardamos você no dia do Hacktown.
                                    </p>
                                    <Button variant="primary" onClick={resetForm}>Realizar outra inscrição</Button>
                                </div>
                            : <HacktownForm
                                isFormValid={isFormValid}
                                fetchInscricao={fetchInscricao}
                                formCtrls={formCtrls}
                                updateFormState={updateFormState}
                                inputChangeHandler={inputChangeHandler}
                                hasError={hasError}
                                fetchErrors={fetchError}/>
                        }   
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabHacktown;