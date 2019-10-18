telephoneCheck("1 555-555-5555");

const check = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?(\d{3})[\-\s]?(\d{4})$/;

function telephoneCheck(str) {
    return check.test(str);
}