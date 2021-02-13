// add whatever parameters you deem necessary - good luck!
function repeat(str, num) {
    let result = '';
    for (i = 0; i < num; i++) {
        result = result.concat(str);
    }
    return result;
}