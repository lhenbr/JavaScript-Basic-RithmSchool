// add whatever parameters you deem necessary - good luck!
function multiples(number, qty) {
    let result = [];
    let multiple = number;
    for (let i = 0; i < qty; i++) {
        result.push(multiple);
        multiple += number;
    }
    return result;
}