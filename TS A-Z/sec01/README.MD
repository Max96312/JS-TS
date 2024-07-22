# TypeScript Type

### Object Types
+ array
+ classes
+ object

### Object Types
+ Tuple
```typescript
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialze tuple variable

//배열 Tuple
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

//Tuple에 요소 추가
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); // OutPut: [1, 'Steve', 2, 'Bill']
```
+ Enum
```typescript
enum PrintMedia{
    Newspaper, // 0
    Newsletter, // 1
    Magazine, // 2
    Book // 3
}

let mediaType: number = PrintMedia.Book; // 3

enum PrintMedia{
    Newspaper = 1,
    Newsletter = 50,
    Magazine = 55,
    Book // 55 + 1
}

let mediaType2: number = PrintMedia.Book; // 56
let type: string = PrintMedia[55]; // 'Magazine'

export enum LanguageCode{
    korean = 'ko',
    english = 'en',
    japanese = 'ja',
    chinese = 'zh',
    spanish = 'es',
}

const code: Language = Language.english;
```
+ Any
```typescript
let something: any = "Hello World";
something = 23;
something = true;

let arr: any = ["John", 212, true];
arr.push("Smith");
console.log(arr); // OutPut: ['John', 212, true, 'Smith']
```
+ Void
```typescript
function sayHi(): void{
    console.log('Hi');
}

let speech: void = sayHi();
console.log(speech); // OutPut: undefined
```
+ Never
```typescript
function throwError(errorMsg: string): never{
    throw new Error(errorMsg);
}

function keepProcessing(): never{
    while (true){
        console.log(`I always does something and never ends.`);
    }
}
```
### `void` vs `never`
void: null 가능, undefined 가능  
never: 할당 불가  
+ Union
```typescript
let code: (string | number);
code = 123; // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
code = true; // Compiler Error
```
# 타입 어노테이션 및 타입 추론
```typescript
const rate: number = 5; //type annotation
const rate2 = 5 // type inference
```
### 타입을 추론하지 못해서 타입 annotation을 꼭 해줘야 하는 경우
```typescript
// any type을 리턴하는 경우
const json = '{"x": 4, "y":7}';
const coordinates = JSON.parse(json);

// 변수 선언을 먼저하고 나중에 초기화하는 경우
let greeting
greeting = 'hello';

// 변수에 대입될 값이 일정치 못하는 경우
let num = [-7, -2, -10];
let numAboveZero: boolean | number = false;

for(let i = 0; i < num.length; i++){
    if(num[i] > 0){
        numAboveZero = num[i];
    }
}
```