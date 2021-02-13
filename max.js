// add whatever parameters you deem necessary - good luck!
function max(array) {
    let max = Number.MIN_VALUE;
    for (let elem of array)
        if (elem > max)
            max = elem;
    return max;
}