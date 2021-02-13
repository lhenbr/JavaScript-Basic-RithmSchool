// add whatever parameters you deem necessary - good luck!
function indexOf(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number)
            return i;
    }
    return -1;
}