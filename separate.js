// add whatever parameters you deem necessary - good luck!
function separate(array) {
    let dogs = [];
    let cats = [];
    let water = [];
    for (let elem of array) {
        if (elem == 'dog')
            dogs.push(elem);
        else if (elem == 'cat')
            cats.push(elem);
        else
            water.push(elem);
    }
    return cats.concat(water, dogs);
}