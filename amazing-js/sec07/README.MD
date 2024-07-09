# 최신 문법
### 템플릿 리터럴 - 백틱(`)
```javascript
var a = `hi`;
var message = `${a} 캡팡`;

message
```
```json
'hi 캡팡'
```
### 디스트럭처링(구조 분해 문법) - 배열
```javascript
var arr = ['apple', 10];

arr;

var favoriteFruit = arr[0];
favoriteFruit;

var myNumber = arr[1];
myNumber;

var [myFruit, myNum] = arr;
myFruit
myNum
```
```json
'apple'
10
'apple'
10
```
### 디스트럭처링 - 객체와 별칭
```javascript
var josh = {
    skill: "js",
    age: 21
};

var mySkill = josh.skill;
mySkill

var myAge = josh.age;
myAge

var {skill, age} = josh;
// var skill = josh.skill
// var age = josh.age
skill
age

var {skill: mySkill, age:myAge} = josh;
// var mySkill = josh.skill
// var myAge = josh.age
mySkill
myAge
```
```json
'js'
21
'js'
21
'js'
21
```
### 스프레드 오퍼레이터 - 객체
```javascript
var obj = {
    a: 10,
    b: 20
}

var user = {
    a: obj.a,
    b: obj.b,
    c: 30
}

var user = {
    ...obj,
    c: 30
}
```
### 스프레드 오퍼레이터 - 배열
```javascript
var arr = ['a', 'b'];
var newArr = [arr[0], arr[1]];

var newArr = [...arr];
var newArr = [...arr, 'c'];
```