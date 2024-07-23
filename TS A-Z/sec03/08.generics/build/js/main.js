"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Doe'];
let names2 = ['John', 'Doe'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러 타입을 단언 X any
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readOnly, ReadonlyArray)
let stringArray = ['John', 'Doe'];
let numberArray = [1, 2];
// stringArray.push('C'); // Error
// numberArray[0] = 3; // Error
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple2 = ['a', 1, 2];
// tuple3 = [1, 'a'];
let users;
users = [[1, 'John'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
