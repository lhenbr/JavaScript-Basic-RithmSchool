// add whatever parameters you deem necessary - good luck!
function twoHighest(array) {
    let highhest = [Number.MIN_VALUE, Number.MIN_VALUE];
    for (let elem of array) {
        if (elem > highhest[0])
            highhest[0] = elem;
        if (highhest[0] > highhest[1]) {
            let swap = highhest[0];
            highhest[0] = highhest[1];
            highhest[1] = swap;
        }
    }
    return highhest;
}