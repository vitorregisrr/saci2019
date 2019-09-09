import React from 'react';
import {CSSTransition} from 'react-transition-group';

import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const ConsultaForm = props => {

    return (
        <div className="row justify-content-center">
            {props.hasError
                ? <div className="col-12 text-center mb-2">
                        <label class="color-primary">
                            <b>Oops! Ocorreram alguns erros:</b>
                        </label>
                        {Array.isArray(props.fetchErrors)
                            ? props
                                .fetchErrors
                                .map(error => <div className="form-group mb-2">
                                    <label class="color-primary">{error}</label>
                                </div>)
                            : <div className="form-group mb-2">
                                <label class="color-primary">{props.fetchErrors.message}</label>
                            </div>}
                    </div>
                : ''}

            <div className="col-10 col-md-8 col-lg-4">
                <div className="form-group">
                    <FormGroup
                        label="* CPF"
                        mask="999.999.999-99"
                        type="input-mask"
                        name="cpf"
                        value={props.formCtrls.cpf.value}
                        error={props.formCtrls.cpf.validation.error}
                        isInvalid={!props.formCtrls.cpf.validation.isValid}
                        isTouched={props.formCtrls.cpf.validation.touched}
                        placeholder="011.000.101-10"
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            <div className="col-12 py-2 d-flex justify-content-end">
                <CSSTransition
                    in={props.isFormValid}
                    timeout={300}
                    unmountOnExit={true}
                    classNames="CSSTransition--fade">
                    <Button
                        variant="primary"
                        classNames="w-100"
                        onClick={() => props.fetchConsulta()}>Procurar inscrição!</Button>
                </CSSTransition>
            </div>
        </div>
    )
}

export default ConsultaForm;