// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(array) {
    for (let elem of array)
        if (array.indexOf(elem) != array.lastIndexOf(elem))
            return elem;
    return undefined
}