// add whatever parameters you deem necessary - good luck!
function totalCaps(array) {
    let count = 0;
    for (let string of array)
        for (let char of string)
            if (char.charCodeAt() > 64 && char.charCodeAt() < 91)
                count++;
    return count;
}