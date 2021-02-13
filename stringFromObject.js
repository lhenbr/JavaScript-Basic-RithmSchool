// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj) {
    let array = Object.entries(obj);
    let result = "";
    for (let elem of array) {
        result = result.concat(elem.join(" = ") + ", ");

    }
    return result.slice(0, result.length - 2);
}