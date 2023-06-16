function reverseWords(str)
{
    arr = str.split(' ');
    return arr.reverse().join(' ');
}

module.exports = reverseWords;
