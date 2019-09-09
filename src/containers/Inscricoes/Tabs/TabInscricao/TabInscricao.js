import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import axios from 'axios.instance';

import '../Tabs.scss';
import Spinner from 'components/UI/Spinner/Spinner';
import Button from 'components/UI/Button/Button';
import InscricaoForm from './InscricaoForm';
import {updateFormState} from 'util/updateFormState';
import SuccessSignal from 'components/UI/SuccessSignal/SuccessSignal';

const TabInscricao = props => {

    const defaultFormCtrls = {
        nome: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                minLength: 7,
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
                isCPF: true
            }
        },

        instituicao: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false
            }
        },

        curso: {
            value: '',
            validation: {
                required: false,
                isValid: false,
                error: '',
                touched: false
            }
        },

        semestre: {
            value: '',
            validation: {
                required: false,
                isValid: false,
                error: '',
                touched: false
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
            cpf: formCtrls.cpf.value.replace(/[_,.,-]/g, ''),
            email: formCtrls.email.value,
            birthdate: Date.parse(formCtrls.dataNasc.value),
            institution: formCtrls.instituicao.value.value
            
        }).then(response => {
            console.log(response)
            setHasError(false);
            setFetchData(response);
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
                            ? <div className="success">
                                    <SuccessSignal></SuccessSignal>
                                    <span className="success__icon"></span>
                                    <p className="success__caption mt-2">
                                        Enviamos para você por e-mail, mais informações e um QRCode para realizaçào do credenciamento nos dias do evento.
                                        Não esqueça-os. Aguardamos você!
                                    </p>
                                    <Button variant="primary" onClick={resetForm}>Realizar outra inscrição</Button>
                                </div>
                            : <InscricaoForm
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

export default TabInscricao;