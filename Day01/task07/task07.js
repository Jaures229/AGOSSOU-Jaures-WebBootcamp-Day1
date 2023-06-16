function isLeapYear(n)
{
    return n % 4 == 0;
}

const year = 2024;
const isLeap = isLeapYear(year);
console.log(`Is ${year} a leap year? ${isLeap}`);