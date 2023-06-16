function calculatePower(base, exponent)
{
    return  isNaN(base) || isNaN(exponent) || base < 0 || exponent < 0 ? -1 : Math.pow(base, exponent);
}

module.exports = calculatePower;
