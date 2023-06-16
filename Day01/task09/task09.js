function capitalizeWords(str)
{
    i = 0;
    arr = str.split(' ');
    arr.forEach(element => {
        arr[i] = element[0].toUpperCase() + element.slice(1);
        i++;
    });
    return arr.join(' ');
}
