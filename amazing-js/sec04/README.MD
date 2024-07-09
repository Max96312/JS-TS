# 객체
### 객체 기본 문법
```javascript
let obj = {
    a:10
}
console.log(obj)
obj.b = 20
console.log(obj)
```
```json
{a: 10}
{a: 10, b: 20}
```
### 객체 축약 문법 2가지
```javascript
let a = 10;
// let obj = {
//     a: a
// };
let obj = {
    a
};

obj.a
```
```json
10
```
2. 속성에 함수를 정의할 때 function 예약어 생략
```javascript
let josh = {
    coding: function () {
        console.log('코딩');
    }
};
json.coding();

let josh = {
    coding() {
        console.log('코딩');
    }
};
json.coding();
```
```json
코딩
코딩
```