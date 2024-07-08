// function makeIterator(numbers){
//     let nextIndex = 0;
//
//     return {
//         next: function () {
//             return nextIndex < numbers.length ?
//                 {value: numbers[nextIndex++], done: false}:
//                 {value: undefined, done: true}
//         }
//     }
// }
//
// const numbersArray = [1, 2, 3];

// const numbersIterable = makeIterator(numbersArray);

// const numbersIterable = numbersArray[Symbol.iterator]();
//
// console.log(numbersIterable.next());
// console.log(numbersIterable.next());
// console.log(numbersIterable.next());
// console.log(numbersIterable.next());
//
// const numbersNotIterable = {a: 'a'}
// for(const n of numbersIterable){
//     console.log(n);
// }
// for(const n of numbersNotIterator){
//     console.log(n);
// }

// const set = new Set([1, 2, 3]);
// console.log('set', set);
//
// console.log(set[Symbol.iterator]())
//
// const map = new Map([['a', 1], ['b', 2]]);
// console.log('map', map);
//
// console.log(map[Symbol.iterator]())

// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// const number = sayNumbers();
//
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// function* generatorFunction() {
//     yield 1;
// }
//
// const generator = generatorFunction();
//
// generator = generator[Symbol.iterator]();

function* createIds() {
    let index = 1;

    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return(10));

function* generatorFunction(){
    yield* [1, 2, 3];

    // yield 1;
    // yield 2;
    // yield 3;
}

const generator = generatorFunction();

for (const number of generator){
    console.log(number);
}