function calculateProduct(arr)
{
    return arr.reduce((prod, num) => prod *num, 1);
}

module.exports = calculateProduct;
