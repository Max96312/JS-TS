let foo = 42; // number
foo = 'bar'; // string
foo = true; // boolean

console.log(typeof foo);

// 원시 타입
// 문자열 string
const name = "han";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof hobbies); // object
console.log(Array.isArray(hobbies)); // true
console.log(typeof address); // object