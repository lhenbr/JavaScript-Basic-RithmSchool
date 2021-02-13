// add whatever parameters you deem necessary - good luck!
function isAlt(string) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    let last
    for (let i = 0; i < string.length; i++) {
        if (last === vowels.includes(string[i]))
            return false;
        last = vowels.includes(string[i]);
    }
    return true;
}