import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import axios from 'axios.instance';

import '../Tabs.scss';
import Spinner from 'components/UI/Spinner/Spinner';
import Button from 'components/UI/Button/Button';
import ConsultaForm from './ConsultaForm';
import {updateFormState} from 'util/updateFormState';

const TabConsulta = props => {

    const defaultFormCtrls = {
        cpf: {
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
        const [newIsFormValid,
            newFormCtrls] = updateFormState(e, key, formCtrls, isSelect);
        setIsFormValid(newIsFormValid);
        setFormCtrls(newFormCtrls);
    }

    const fetchConsulta = () => {
        setIsFetching(true);
        axios.get('/check', {
            cpf: formCtrls.cpf.value
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
                                    <h3 className="success__caption color-success text-bold text-uppercase">
                                       Inscrição encontrada!
                                    </h3>
                                </div>
                            : <ConsultaForm
                                isFormValid={isFormValid}
                                fetchConsulta={fetchConsulta}
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

export default TabConsulta;