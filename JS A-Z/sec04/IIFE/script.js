// (function () {
//     var aName = 'Barry';
// })();
//
// console.log(aName);

// var result = (function () {
//     var name = 'Barry';
//     return name;
// })();
//
// console.log(result);

// const hello = function (a, b){
//     return a - b;
// }
//
// (function (a,b){
//     return a - b;})

// const score = () => {
//     let count = 0;
//     return{
//         current: () => {return count},
//         increment: () => {count++},
//         reset: () => { count = 0}
//     }
// }
//
// console.log(typeof score);
// console.log(score)
// console.log(score().current());
// score().increment();
// console.log(score().current());

// const score = (() => {
//     let count = 0;
//     return{
//         current: () => {return count},
//         increment: () => {count++},
//         reset: () => { count = 0}
//     }
// })()
//
// console.log(typeof score);
// console.log(score)
// console.log(score.current());
// score.increment();
// console.log(score.current());
// score.reset()
// console.log(score.current());

// const increment = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) => console.log(`It is ${num} number`);
//     return () => {counter++; number(counter)}
// }
//
// increment();
// increment();

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => console.log(`It is ${num} number`);
    return () => {counter++; number(counter)}
})()

console.log(increment)
increment()
increment()