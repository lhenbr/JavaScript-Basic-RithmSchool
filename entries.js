// add whatever parameters you deem necessary - good luck!
function entries(obj) {
    let result = [];
    let count = 0;
    for (let key in obj) {
        result[count] = [key, obj[key]];
        count++;
    }
    return result
}