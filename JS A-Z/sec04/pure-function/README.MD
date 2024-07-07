# impure-function
side-effect 발생
```javascript
let x = 0;
const numberUp = () => x += 1;
console.log(numberUp())
console.log(x)
```
`1`  
`1`

```javascript
const alphabetArray = ['a', 'b'];
const addItemToArray = (originalArray,newItem) => {
    originalArray.push(newItem);
    return originalArray;
}

console.log(addItemToArray(alphabetArray, 'c'));
console.log(alphabetArray);
```
`['a', 'b', 'c']`  
`['a', 'b', 'c']`

# pure-function
```javascript
let x = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp(x));
console.log(x);
```
`1`  
`0`

```javascript
const alphabetArray = ['a', 'b'];
const pureAddItemToArray = (originalArray,newItem) => {
    return [...originalArray,newItem];
}

console.log(pureAddItemToArray(alphabetArray, 'c'));
console.log(alphabetArray);
```
`['a', 'b', 'c']`  
`['a', 'b']`