// add whatever parameters you deem necessary - good luck!
function countNumbers(arrays) {
    let number;
    let count = 0;
    for (let array of arrays) {
        number = parseInt(array, 10)
        if (!(isNaN(number))) {
            count++
        }
    }
    return count;
}