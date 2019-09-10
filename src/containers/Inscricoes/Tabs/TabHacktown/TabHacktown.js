import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import axios from 'axios.instance';

import '../Tabs.scss';
import Spinner from 'components/UI/Spinner/Spinner';
import SuccessSignal from 'components/UI/SuccessSignal/SuccessSignal';
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
            }
        },

        integrante1: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                isCPF: true
            }
        },

        integrante2: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                isCPF: true
            }
        },

        integrante3: {
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false,
                isCPF: true
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
        axios.post('/hackathon', {
            name: formCtrls.nome.value,
            members: [formCtrls.integrante1.value.replace(/[_,.,-]/g, ''), formCtrls.integrante2.value.replace(/[_,.,-]/g, ''), formCtrls.integrante3.value.replace(/[_,.,-]/g, '')]
        }).then(response => {
            setHasError(false);
            fetchData(response.data.data);
        }).catch(error => {
            setHasError(true);
            setFetchError(error.response ? error.response.data.errors : 'Algo muito estranho ocorreu. Tente novamente mais tarde!');
        }). finally(() => {
            setIsFetching(false);
        })
    }

    const resetForm = () => {
        setFetchData(false);
        setFormCtrls(defaultFormCtrls);
        setIsFormValid(false);
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
                            ?  <div className="success">
                            <SuccessSignal></SuccessSignal>
                            <span className="success__icon"></span>
                            <p className="success__caption mt-2">
                                Sua equipe foi cadastrada com sucesso! Enviamos mais informações para o e-mail do integrante 1.
                                Aguardamos sua equipe no dia do hackathon!
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