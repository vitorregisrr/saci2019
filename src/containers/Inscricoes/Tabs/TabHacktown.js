import React, {useState} from 'react';
import {updateFormState} from 'util/updateFormState';
import ReactWOW from 'react-wow';

import './Tabs.scss';
import FormGroup from 'components/UI/Form/FormGroup';

const TabHacktown = props => {
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
                    </div>
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabHacktown;