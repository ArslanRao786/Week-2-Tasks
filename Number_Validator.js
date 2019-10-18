function telephoneCheck(str) {
    const check = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?(\d{3})[\-\s]?(\d{4})$/;
    return check.test(str);
}
telephoneCheck("1 555-555-5555");