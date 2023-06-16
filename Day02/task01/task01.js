function sumOfOddNumbers(nb) {
    return nb.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
}

module.export = {
    sumOfOddNumbers
}
