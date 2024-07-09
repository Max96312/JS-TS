# 배열
### 배열 기본 문법
```javascript
var arr = [];

arr[0] = 10;
arr

arr[1] = 20;
arr

arr[5] = 50;
arr
```
```json
[10]
[10, 20]
[10, 20, empty × 3, 50]
```
index로 직접 data를 삽입하면 위험하다.

### 배열 조작 방법과 내장 API 소개
실제로 web에서 목록들을 표현할 때는 배열로 표현한다.
+ 유튜브의 영상 목록
+ 네이버 쇼핑의 상품 목록
```javascript
var arr = ['a', 'b']
arr

arr.length
```
```json
['a', 'b']
2
```
```javascript
var arr = [];

arr.push(10);
arr.push('a');
arr;

arr.pop();
arr;

arr.splice(0, 1)
arr
```
```json
[10, 'a']
[10]
[]
```
`배열 API === prototype method`  
기본적으로는 `arr.splice()`, `arr.slice()`을 사용해서 배열을 조작한다.

### 배열 반복문
```javascript
var arr = ['a', 'b', 'c'];

arr.forEach(function (value) {
    console.log(value)
})
```
```json
a
b
c
```
### 배열 주요 API - map과 filter
```javascript
var arr = [10, 20, 30];

arr.map(function (item) {
    return item * 10
})

arr.filter(function (item) {
    if (item == 10){
        return true;
    }
})
```
```json
[100, 200, 300]
[10]
```
map은 새로운 값을 반환해준다.

### 반복문으로 map, filter 코드 대하기
```javascript
var arr = [10, 20, 30];
var newArr = [];

arr.forEach(function (item) {
    newArr.push(item * 10);
})
newArr

var newArr = [];

arr.forEach(function (item) {
    if(item == 10){
        newArr.push(item);
    }
})
newArr
```
```json
[100, 200, 300]
[10]
```