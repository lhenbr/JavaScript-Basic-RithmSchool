// add whatever parameters you deem necessary - good luck!
function removeFromString(string, startIndex, length) {
    let array = string.split("");
    array.splice(startIndex, length);
    string = array.join("");
    return string;
}