function countOccurrences(arr)
{
    const element_count = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element_count[element]) {
            element_count[element] += 1;
        } else {
            element_count[element] = 1;
        }
    }
    return element_count;
}

module.exports = countOccurrences;
