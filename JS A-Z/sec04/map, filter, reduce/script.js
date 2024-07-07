const arr1 = [1, 4, 9, 16];

const map1 = arr1.map(x => x * 2);

console.log(map1);

const map2 = arr1.map(function (item, index, array) {
    console.log(item, index, array, this);
    return (item * 2);
}, {a: 'a'});

console.log(map2);

const words = ['spray', 'limit', 'elite', 'exuberant']
const result = words.filter(word => word.length > 6);
console.log(result);

const reduce1 = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
})
console.log(reduce1);

const reduce2 = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
}, 10)
console.log(reduce2);