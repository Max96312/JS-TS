# 함수
### 함수 선언문과 함수 표현식
+ 함수 선언문 (지향)
```javascript
function logText(){
    console.log('hi');
}
```
+ 함수 표현식
```javascript
let logText = function() {
    console.log('hi');
}
```
### 자바스크립트의 특이한 성질 - 일급 함수
변수가 사용되는 곳에 함수가 사용될 수 있다.
```javascript
logText(function(){
    console.log('hi');
})
```
### 화살표 함수 기본
함수 표현식에서 진화된 문법
```javascript
let logText = () => {
    console.log('hi');
}
```
### 화살표 함수 축약 문법 2가지
1. 단순한 자바스크립트 표현식
```javascript
let logText = () => console.log('hi');
```
2. 전달 인자가 하나인 경우 ()생략
```javascript
// const logText = (message) => console.log(message);
const logText = message => console.log(message);
```