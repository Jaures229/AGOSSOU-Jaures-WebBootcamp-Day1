function isPalindrome(str)
{
    str = str.replace(/[^\w]/g, '').toLowerCase();
    return str.split("").join('') == str.split("").reverse().join('');
}
