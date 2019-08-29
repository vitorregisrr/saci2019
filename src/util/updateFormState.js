import {checkValidity} from 'util/checkValidity';

export const updateFormState = (e, key, formCtrls) => {
    const newForm = {
        ...formCtrls
    };

    const {isValid, error} = checkValidity(e.target.value, formCtrls[key]);
    newForm[key].value = e.target.value;
    newForm[key].validation.isValid = isValid;
    newForm[key].validation.error = error;
    newForm[key].validation.touched = true;

    let isFormValidated = true;
    for (let key in newForm) {
        if (!newForm[key].validation.isValid) {
            isFormValidated = false;
        }
    }

    return [isFormValidated, newForm];
}