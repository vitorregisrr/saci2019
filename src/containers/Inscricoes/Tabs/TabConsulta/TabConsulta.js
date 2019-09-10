import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import axios from 'axios.instance';

import '../Tabs.scss';
import Spinner from 'components/UI/Spinner/Spinner';
import Button from 'components/UI/Button/Button';
import ConsultaForm from './ConsultaForm';
import {updateFormState} from 'util/updateFormState';
import SuccessSignal from 'components/UI/SuccessSignal/SuccessSignal';

const TabConsulta = props => {

    const defaultFormCtrls = {
        cpf: {
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
        const [newIsFormValid,
            newFormCtrls] = updateFormState(e, key, formCtrls, isSelect);
        setIsFormValid(newIsFormValid);
        setFormCtrls(newFormCtrls);
    }

    const fetchConsulta = () => {
        setIsFetching(true);
        axios
            .post('/check', {
            cpf: formCtrls
                .cpf
                .value
                .replace(/[_,.,-]/g, '')
        })
            .then(response => {
                setHasError(false);
                setFetchData(response.data.data);
            })
            .catch(error => {
                setHasError(true);
                setFetchError(error.response.data.errors);
            })
            . finally(() => {
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
                            ? <div className="success text-center">
                                    <SuccessSignal></SuccessSignal>
                                    <span className="success__icon"></span>
                                    <ul>
                                        <li><span>Nome: </span>{fetchData.name || 'Inválido'}</li>
                                        <li><span>CPF: </span>{fetchData.cpf || 'Inválido'}</li>
                                        <li><span>E-mail: </span>{fetchData.email || 'Inválido'}</li>
                                        <li><span className="d-block font-weight-bold mb-2"><b>QRCode: </b></span>{fetchData.qrcode ? <img className="d-block" src={fetchData.qrcode} alt="QRCode para credenciamento"></img> : 'Inválido'}</li>
                                    </ul>
                                    <Button variant="primary" onClick={resetForm}>Realizar outra consulta</Button>
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