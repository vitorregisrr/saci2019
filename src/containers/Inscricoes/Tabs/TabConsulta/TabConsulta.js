import React, {useState} from 'react';
import {updateFormState} from 'util/updateFormState';
import ReactWOW from 'react-wow';
import {CSSTransition} from 'react-transition-group';

import '../Tabs.scss';
import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const TabConsulta = props => {
    const [isFormValid,
        setisFormValid] = useState(false);

    const [formCtrls,
        setFormCtrls] = useState({
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

                    <div className="row justify-content-center">

                        {props.fetchErrors
                            ? props.fetcherrors
                                .errors
                                .map(error => <div className="col-10 col-lg-3 col-md-4">
                                    <div className="form-group">
                                        <label class="form-error">error</label>
                                    </div>
                                </div>)
                            : ''}

                        <div className="col-10 col-lg-3 col-md-4">
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

                        <div className="col-12 py-2 d-flex justify-content-end">
                            <CSSTransition
                                in={isFormValid}
                                timeout={300}
                                unmountOnExit={true}
                                classNames="CSSTransition--fade">
                                <Button variant="primary" classNames="w-100">Consultar</Button>
                            </CSSTransition>
                        </div>

                    </div>
                </div>
            </ReactWOW>
        </section>
    )
}

export default TabConsulta;