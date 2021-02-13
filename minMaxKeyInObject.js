// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
    let result = [Number.MAX_VALUE, Number.MIN_VALUE];
    for (let key in obj) {
        if (key < result[0])
            result[0] = +key;
        if (key > result[1])
            result[1] = +key;
    }
    return result;
}