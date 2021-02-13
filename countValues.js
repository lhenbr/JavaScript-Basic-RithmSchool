// add whatever parameters you deem necessary - good luck!
function countValues(arr, num) {
    let count = 0;
    for (let value of arr) {
        if (value == num)
            count++;
    }
    return count;
}