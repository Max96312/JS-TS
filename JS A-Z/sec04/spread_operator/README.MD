# 전개 연산자  
`...`
### 배열 조합
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
```

```javascript
arr1.push(arr2);
```
`(4) [1, 2, 3, Array(3)]`  
arr2 자체가 마지막 요소 추가된다.

```javascript
arr1.push(...arr2);
```
`(6) [1, 2, 3, 4, 5, 6]`  
arr2의 각 요소 개별적으로 추가된다.  

### 객체 조합
```javascript
const obj1 = {
    a: 'A',
    b: 'B'
};

const obj2 = {
    c: 'C',
    d: 'D'
}
```
```javascript
const objWrap = {obj1, obj2};
```
`{obj1: {…}, obj2: {…}}`  
객체 자체가 들어감
```javascript
const objWrap = {...obj1, ...obj2};
```
`{a: 'A', b: 'B', c: 'C', d: 'D'}`  
객체 자체가 아닌 각각의 값이 할당 됨

### 불변성 유지
```javascript
const arr1 = [1, 2, 3];
// const arr2 = arr1.reverse()

const arr2 = [...arr1].reverse();

console.log(arr1)
console.log(arr2)
```