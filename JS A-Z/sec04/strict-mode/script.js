// "use strict";
//
// function sum(a, b){
//     "use strict"
//     return a + b;
// }
//
// classes Cat {
//
// }

// let greeting = 'hello';

// window 객체에 자동으로 할당
// greating = 'hi';
//
// console.log(greeting);
// console.log(greeting, window.greating)
//
// undefined = 8;
// NaN = 10;
//
// console.log(undefined);
// console.log(NaN);
//
// const obj = {};
//
// Object.defineProperty(obj, "readOnly", {
//     writable: false, value: 7
// })
//
// console.log(obj)
//
// obj.readOnly = 10;
//
// console.log(obj)
//
// const obj2 = {
//     get readOnly() {
//         return 8;
//     }
// }
//
// console.log(obj2.readOnly);
//
// obj2.readOnly = 10;
// console.log(obj2.readOnly);
//
// function add(a, a, b){
//     return a + a + b;
// }
//
// console.log(add(1, 2, 3));

// "string".prop = 7;
//
// console.log("string".prop);

function sum(a, b){
    console.log(this);
    return a + b;
}

console.log(this);
sum(1, 2);
sum.bind(this)(1, 2);