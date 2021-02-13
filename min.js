// add whatever parameters you deem necessary - good luck!
function min(array) {
    let min = Number.MAX_VALUE;
    for (let elem of array)
        if (elem < min)
            min = elem;
    return min;
}
