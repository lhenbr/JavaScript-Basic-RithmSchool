// add whatever parameters you deem necessary - good luck!
function slice(array, strIndex, endIndex) {
    let newArr = [], count = 0;

    if (!(endIndex)) {
        for (let i = strIndex; i < array.length; i++) {
            newArr[count] = array[i];
            count++
        }
        return newArr;
    }
    else {
        if (endIndex > array.length)
            endIndex = array.length;
        for (let i = strIndex; i < endIndex; i++) {
            newArr[count] = array[i];
            count++;
        }
        return newArr;
    }
}