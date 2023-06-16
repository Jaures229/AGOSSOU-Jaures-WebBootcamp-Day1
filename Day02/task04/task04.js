function isPerfectSquare(nb)
{
    return !Number.isInteger(Math.sqrt(nb)) ? false: true;
}

module.export = isPerfectSquare;
