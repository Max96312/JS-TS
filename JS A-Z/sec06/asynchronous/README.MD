# 동기 & 비동기
### 동기
```javascript
console.log('1');
console.log('2');
```
### 비동기
```javascript
setTimeout(() => {
    console.log('1')
}, 1000);
console.log('2');
```

JS는 싱글스레드이다.  
하나의 일을 할 때 하나밖에 못하는데 만약 그 하나의 일이 오래 걸리는 일이 다른 작업들은 그 하나의 일이 끝날때 까지 기다려야 한다.
```javascript
const start = function (){
    console.log("시작");
}
const end = function (){
    console.log("종료");
}

start();
end();
```

# Asynchronous 해결 방법
1. callback (ES6 이전)
2. Promise (ES6 이후)
3. Async/Await (ES7 이후)