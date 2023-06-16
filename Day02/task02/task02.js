function isValidEmail(str)
{
    return !str.includes("@") || !str.includes(".com") ? false : true;
}

module.exports = isValidEmail;
