import React from 'react';
import {CSSTransition} from 'react-transition-group';

import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const HacktownForm = props => {

    return (
        <div className="row">
            {props.hasError
                ? <div className="col-12 text-center">
                        <label className="color-primary mb-2">
                            <b>Oops! Ocorreram alguns erros:</b>
                        </label>
                        {Array.isArray(props.fetchErrors)
                            ? props
                                .fetchErrors
                                .map(error => <div className="form-group mb-2">
                                    <label className="color-primary">{error}</label>
                                </div>)
                            : <div className="form-group mb-2">
                                <label className="color-primary">{props.fetchErrors.message}</label>
                            </div>}
                    </div>
                : ''}

            <div className="col-12 col-lg-3 col-md-6">
                <FormGroup
                    label="* Nome da equipe"
                    name="nome"
                    value={props.formCtrls.nome.value}
                    error={props.formCtrls.nome.validation.error}
                    isInvalid={!props.formCtrls.nome.validation.isValid}
                    isTouched={props.formCtrls.nome.validation.touched}
                    placeholder="The Killers"
                    onChangeHandler={props.inputChangeHandler}/>
            </div>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="form-group">
                    <FormGroup
                        label="* CPF Integrante 1"
                        mask="999.999.999-99"
                        type="input-mask"
                        name="integrante1"
                        value={props.formCtrls.integrante1.value}
                        error={props.formCtrls.integrante1.validation.error}
                        isInvalid={!props.formCtrls.integrante1.validation.isValid}
                        isTouched={props.formCtrls.integrante1.validation.touched}
                        placeholder="011.000.101-10"
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="form-group">
                    <FormGroup
                        label="* CPF Integrante 2"
                        mask="999.999.999-99"
                        type="input-mask"
                        name="integrante2"
                        value={props.formCtrls.integrante2.value}
                        error={props.formCtrls.integrante2.validation.error}
                        isInvalid={!props.formCtrls.integrante2.validation.isValid}
                        isTouched={props.formCtrls.integrante2.validation.touched}
                        placeholder="011.000.101-10"
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="form-group">
                    <FormGroup
                        label="* CPF Integrante 3"
                        mask="999.999.999-99"
                        type="input-mask"
                        name="integrante3"
                        value={props.formCtrls.integrante3.value}
                        error={props.formCtrls.integrante3.validation.error}
                        isInvalid={!props.formCtrls.integrante3.validation.isValid}
                        isTouched={props.formCtrls.integrante3.validation.touched}
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
                        onClick={() => props.fetchInscricao()}>Me inscreva!</Button>
                </CSSTransition>
            </div>
        </div>
    )
}

export default HacktownForm;