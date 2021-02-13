// add whatever parameters you deem necessary - good luck!
function pluck(arrOfObj, key) {
    result = [];
    for (let obj of arrOfObj) {
        result.push(obj[key]);
    }
    return result;
}