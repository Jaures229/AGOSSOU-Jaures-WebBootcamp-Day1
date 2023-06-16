function calculateAverage(arr)
{
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

module.exports = calculateAverage;

