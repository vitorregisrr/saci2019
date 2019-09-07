import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import FormGroup from 'components/UI/Form/FormGroup';
import Button from 'components/UI/Button/Button';

const InscricaoForm = props => {

    const [instituicoesList] = useState([
        {
            value: 'ifsul-bage',
            label: 'IFsul - Campus Bagé'
        }, {
            value: 'ifsul-pelotas',
            label: 'IFsul - Campus Pelotas'
        }, {
            value: 'unipampa',
            label: 'Unipampa'
        }, {
            value: 'urcamp',
            label: 'Urcamp'
        }, {
            value: 'ideau',
            label: 'IDEAU'
        }, {
            value: 'unicesumar',
            label: 'Unicesumar'
        }, {
            value: 'estacio',
            label: 'Estácio'
        }, {
            value: 'outros',
            label: 'Outros'
        }
    ]);

    return (
        <div className="row">
            {props.hasError
                ? <div className="col-12 text-center">
                        <label class="color-primary mb-2">
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

            <div className="col-lg-4 col-md-6">
                <FormGroup
                    label="* Nome Completo"
                    name="nome"
                    value={props.formCtrls.nome.value}
                    error={props.formCtrls.nome.validation.error}
                    isInvalid={!props.formCtrls.nome.validation.isValid}
                    isTouched={props.formCtrls.nome.validation.touched}
                    placeholder="Alan Turing"
                    onChangeHandler={props.inputChangeHandler}/>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="form-group">
                    <FormGroup
                        label="* Email"
                        name="email"
                        value={props.formCtrls.email.value}
                        error={props.formCtrls.email.validation.error}
                        isInvalid={!props.formCtrls.email.validation.isValid}
                        isTouched={props.formCtrls.email.validation.touched}
                        placeholder="reidacomputacao@gmail.com"
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            <div className="col-6 col-lg-2 col-md-3">
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

            <div className="col-6 col-lg-2 col-md-3">
                <div className="form-group">
                    <FormGroup
                        label="* Data nasc."
                        mask="99/99/9999"
                        type="input-mask"
                        name="dataNasc"
                        placeholder="25/06/1912"
                        value={props.formCtrls.dataNasc.value}
                        error={props.formCtrls.dataNasc.validation.error}
                        isInvalid={!props.formCtrls.dataNasc.validation.isValid}
                        isTouched={props.formCtrls.dataNasc.validation.touched}
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6">
                <div className="form-group">
                    <FormGroup
                        label="* Instituição"
                        type="select"
                        options={instituicoesList}
                        name="instituicao"
                        placeholder="The University of Manchester"
                        value={props.formCtrls.instituicao.value}
                        error={props.formCtrls.instituicao.validation.error}
                        isInvalid={!props.formCtrls.instituicao.validation.isValid}
                        isTouched={props.formCtrls.instituicao.validation.touched}
                        onChangeHandler={props.inputChangeHandler}/>
                </div>
            </div>

            {props.formCtrls.instituicao.value.value === 'ifsul-bage'
                ? <React.Fragment>
                        <div className="col-lg-4 col-md-6">
                            <FormGroup
                                label="* Curso"
                                type="select"
                                options={[
                                {
                                    value: 'tads',
                                    label: 'TADS'
                                }, {
                                    value: 'agro',
                                    label: 'Agropecuária'
                                }, {
                                    value: 'ti',
                                    label: 'Téc. Info.'
                                }, {
                                    value: 'engenharia-agro',
                                    label: 'Engenharia Agronômica'
                                }, {
                                    value: 'tecnologia-alimentos',
                                    label: 'Técnologia em Alimentos'
                                }, {
                                    value: 'outros',
                                    label: 'Outros'
                                }
                            ].sort((a, b) => a.label > b.label
                                ? 1
                                : -1)}
                                name="curso"
                                placeholder="The University of Manchester"
                                value={props.formCtrls.curso.value}
                                error={props.formCtrls.curso.validation.error}
                                isInvalid={!props.formCtrls.curso.validation.isValid}
                                isTouched={props.formCtrls.curso.validation.touched}
                                onChangeHandler={props.inputChangeHandler}/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <FormGroup
                                label="* Semestre"
                                mask="9"
                                type="input-mask"
                                name="semestre"
                                value={props.formCtrls.semestre.value}
                                error={props.formCtrls.semestre.validation.error}
                                isInvalid={!props.formCtrls.semestre.validation.isValid}
                                isTouched={props.formCtrls.semestre.validation.touched}
                                placeholder="1º semestre"
                                onChangeHandler={props.inputChangeHandler}/>
                        </div>
                    </React.Fragment>
                : ''
}

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

export default InscricaoForm;