// add whatever parameters you deem necessary - good luck!
function removeVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let array = string.split("");
    let result = "";
    for (let char of array)
        if (!(vowels.includes(char.toLowerCase())))
            result = result.concat(char);
    return result;
}