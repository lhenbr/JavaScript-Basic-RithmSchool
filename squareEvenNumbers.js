// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(array) {
    let sum = 0;
    for (let elem of array) {
        if (!(elem % 2))
            sum += Math.pow(elem, 2);
    }
    return sum;
}