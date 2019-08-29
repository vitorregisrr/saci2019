import validator from 'validator';

export const checkValidity = (newValue, config) => {
    const rules = config.validation;
    const label = config.label;
    let error = '';
    let isValid = true;

    if (rules.required) {
        const isEmpty = !validator.isEmpty(newValue);
        isValid = isEmpty && isValid;
    }

    if (rules.minLength) {
        const isMinLength = validator.isLength(newValue.replace(/_/g, ''), {min: rules.minLength}) && isValid;
        error = isMinLength
            ? ''
            : `Este campo deve ter no  minímo ${rules.minLength} caractéres`;
        isValid = isMinLength && isValid;
    }

    if (rules.maxLength) {
        const isMaxLength = validator.isLength(newValue, {max: rules.maxLength}) && isValid;
        error = isMaxLength
            ? ''
            : `Este campo pode ter no máximo ${rules.maxLength} caractéres`;
        isValid = isMaxLength && isValid;
    }
    if (rules.isEmail) {
        const isEmail = validator.isEmail(newValue) && isValid;
        error = isEmail
            ? ''
            : `Este campo deve ser um e-mail`;
        isValid = isEmail && isValid;
    }

    return {isValid, error}
}