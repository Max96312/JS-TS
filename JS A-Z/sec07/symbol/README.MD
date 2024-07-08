### Number의 Shortcut 기능
```javascript
var number = Number(5);
//shortcut  사용
var number = 5;
```
### Symbol은 shortcut 기능이 없다.
```javascript
var symbol = Symbol("5");
```

# Symbol
```javascript
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('hi');
console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym1 === sym2);

console.log(sym3.description);
```
```javascript
Symbol()
Symbol()
Symbol(hi)
false
hi
```
+ symbol은 unique한 값을 할당 한다.
```javascript
const idSym = Symbol('id');

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}

carA.id = 300;

console.log(carA);
```
```json
{id: 300, name: 'morning', brand: 'kia', price: 1000}
```
`carA`의 `id` 즉, `carA.id` 값이 override 되었다. 이처럼 `carA`의 property를 모르는 상태에서 unique 한 값을 할당하기 위해 사용한다.
# Symbol 사용
### 객체 생성 후 symbol 추가
```javascript
const idSym = Symbol('id');

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
}
carA[idSym] = 300;

console.log(carA);
```
```json
{id: 1, name: 'morning', brand: 'kia', price: 1000, Symbol(id): 300}
```
### 객체 리터럴 내에서 직접 property키 사용
```javascript
const idSym = Symbol('id');

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    [idSym]: 300
}

console.log(carA);
```
```json
{id: 1, name: 'morning', brand: 'kia', price: 1000, Symbol(id): 300}
```
### symbol은 property가 숨겨진다.
```javascript
const idSym = Symbol('id');

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    [idSym]: 300
}

console.log(carA);

console.log(Object.getOwnPropertyNames(carA));

for (const key in carA) {
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(carA));
```
```json
(4) ['id', 'name', 'brand', 'price']

id
name
brand
price

[Symbol(id)]
```
### symbol.for()
```javascript
const sym1 = Symbol('sym1');
const sym2 = Symbol('sym1');

console.log(sym1 === sym2);
```
```json
false
```
```javascript
const sym1 = Symbol.for('sym1');
const sym2 = Symbol.for('sym1');

console.log(sym1 === sym2);
```
```json
true
```
### symbol.keyFor()
```javascript
const sym3 = Symbol.for('this is symbol from sym3');
const sym4 = Symbol.for('hi iam symbol from sym4');

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym4));
```
```json
this is symbol from sym3
hi iam symbol from sym4
```
### symbol exam 01 - not use symbol
```javascript
const RED = 'red';
const ORANGE = 'orange';
const YELLOW = 'yellow';
const BLUE = 'blue';
const DOG = 'blue';

function getImportantLevel(color) {
    switch (color) {
        case RED:
            return 'very important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE:
            return 'not important';
        default:
            console.log(`${color} not included`);
    }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(DOG));
```
```json
not important
not important
```
### symbol exam 01 - use symbol
```javascript
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const DOG = 'blue';

function getImportantLevel(color) {
    switch (color) {
        case RED:
            return 'very important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE:
            return 'not important';
        default:
            console.log(`${color} not included`);
    }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(DOG));
```
```json
not important
blue not included
undefined
```
### symbol exam 02 - not use symbol
```javascript
class Car{
    constructor() {
        this.length = 0;
    }

    add(brand, name){
        this[brand] = name;
        this.length++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for(const car in myCars){
    console.log(car, myCars[car]);
}
```
```json
length 3
kia morning
hyundai tucson
genesis gv80
```
### symbol exam 02 - use symbol
```javascript
const length = Symbol('length');

class Car{
    constructor() {
        this[length] = 0;
    }

    add(brand, name){
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for(const car in myCars){
    console.log(car, myCars[car]);
}
```
```json
kia morning
hyundai tucson
genesis gv80
```