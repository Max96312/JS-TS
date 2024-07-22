// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer = 6;
let float: number = 1.2345;

// String
let string: string
let firstName = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1:string[] = ['John', 'Doe'];
let names2: Array<string> = ['John', 'Doe'];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 X any
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readOnly, ReadonlyArray)
let stringArray: readonly string[] = ['John', 'Doe'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('C'); // Error
// numberArray[0] = 3; // Error

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple2 = ['a', 1, 2];
// tuple3 = [1, 'a'];

let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']];

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false); // Error

// any
let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown:unknown = 123;
// let string1: string = unknown; // Error
let string1: boolean = unknown as boolean;

// object
let obj: object = {};
let arr: object = [];
// let null: object = null;
let date:object = new Date();

// const obj1: object = {
//     id: 1,
//     title: 'title1'
// }

const obj1: { id: number, title: string } = {
    id: 1,
    title: 'title1'
}

// Union
let union: (string | number)
union = 'hi';
union = 123;
// union = []

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function(x, y){
    return x * y
}

let func2: () => void;
func2 = function(){
    console.log('hi');
}

// Null, Undefined
// let number1: number = undefined;
// let string2: string = null; // 불가능
// let object: { a: 10, b: false; } = undefined; // 불가능
// let array: any[] = null; // 불가능
// let undefined1: undefined = undefined; // 불가능
// let null1: null = undefined; // 불가능
// let void1: void = null; // 불가능

let void2: undefined = undefined; // 가능

// void
function greeting(): void{ // undefined type일 경우 error -> TypeScript 5.1 버전부터는 허용
    console.log('hi');
}

const hi = greeting();
console.log(hi); // undefined

// never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing(): never{
    while (true){
        console.log('hi');
    }
}

// []: never
// const never: never[] = []
// never.push(1);

const never2: number[] = []
never2.push(1);