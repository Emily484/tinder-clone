const isEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

const isEmpty = (string) => {
    if(string.trim() == '') return true;
    else return false;
}

export default function validateRegisterInput(data){
    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = 'Must not be empty';
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address';
    }

    if(data.password.length < 7) errors.password = 'Password must be at least 7 characters';
    if(isEmpty(data.password)) errors.password = 'Must not be empty';
    if(isEmpty(data.firstName)) errors.firstName = 'Must not be empty';

    return {
        errors,
        isValid: Object.keys(errors).length === 0 ? true : false
    }
}