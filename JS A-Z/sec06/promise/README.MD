
# Promise를 통한 비동기 요청
```javascript
function createPromise() {
    return new Promise((resolve, reject) => {
        // 비동기 요청
        const success = true;
        if (success){
            resolve('성공');
        }else {
            reject('실패');
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
```
# fetch
내부적으로 Promise를 지원함
```javascript
fetch('http://jsonplaceholder.typicode.com/todos/1')
    // promise 객체를 반환
    .then(res => res.json())
    // json 객체로 conversion
    .then(json => console.log(json))
```

# Promise.all()
# Promise.race()