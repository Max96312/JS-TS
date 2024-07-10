# 비동기 처리
### 비동기 처리란 무엇인가
```javascript
// fetchUser()

// 1. 사용자 정보 요청
fetchUser(); // 0.1초
// 2. 좌측 메뉴 정보 요청
let menu = fetchMenuInfo();


fetchMenuInfo(function () {
    console.log("정보 요청 완료 후 실행");
}); // 1시간
// 3. 영상 본문 요청
fetchContents(); // 1초
// 4. 페이지 UI 표시
renderPageUI(); // 2초

// 총합: 최소 1시간
```
각 기능들을 동기적으로 처리하는게 아니라 비동기적으로 처리해 기능의 효율을 높인다.
### 비동기 처리 코드 예시
```javascript
function fetchMenuInfo(){
    // return "메뉴 1";
    return $.get("http://domain.com/api/menu");
}

function fetchMenuInfo(){
    // return "메뉴 1";
    return $.get("http://domain.com/api/menu", function (){
        menu = resposne;    
    });
}
// fetchUser()

// 1. 사용자 정보 요청
fetchUser(); // 0.1초
// 2. 좌측 메뉴 정보 요청
let menu = fetchMenuInfo(); // 1시간
// 3. 영상 본문 요청
fetchContents(); // 1초
// 4. 페이지 UI 표시
renderPageUI(menu); // 2초

// 총합: 최소 1시간
```
### 콜백 함수의 단점과 Promise가 필요한 이유
```javascript
function fetchMenu(callbackFunction){
    setTimeout(() => {
        let data =  { firstMenu: "구독" }
        callbackFunction(error, data);
        return data;
    }, 5000);
}

let menu;
menu = fetchMenu(function (error, result){
    if (error){
        console.log("예외 처리");
        return;
    }
    console.log("실행: ", result);
    menu = result;
    console.log("출력 결과: ", menu);

    renderPageUI(function (error, response){
        response;
        menu;
    })
});
```
error 처리와 callback depth가 깊어짐으로 코드 가독성이 매우 떨어진다.

### 프로미스 문법 안내
```javascript
function fetchMenu(callbackFunction){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            let data = {firstMenu: "구독"};
            
            if(error) {
                // throw new Error();
                reject(error);
            }
            resolve(data);
        }, 5000);
    });
}

let menu;

// promise 문법으로 작성된 코드
fetchMenu() // Promise 객체여야만 then, catch 유효하게 동작한다.
    .then(renderPageUI)
    .then(function (result){
    console.log("5초 뒤 실행: ", result);
    menu = result;
}).catch(function (error){
    console.log("에러 처리");
    return;
})
```

### async await 문법 소개
```javascript
async function init(){
    // 1. 메뉴 선언
    let menu;
    // 2. 메뉴 데이터 호출해서 할당
    menu = await fetchMenu();
    // 3. 메뉴 데이터 콘솔에 출력
    console.log(menu);
}

init();
```
### async await 코드 변환
```javascript
function fetchMenu(callbackFunction){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            let data = {firstMenu: "구독"};

            if(error) {
                // throw new Error();
                reject(error);
            }
            resolve(data);
        }, 5000);
    });
}

async function init(){
    let menu;
    menu = await fetchMenu();
    console.log("출력 결과: ", menu);
}

let menu;

// promise 문법으로 작성된 코드
fetchMenu() // Promise 객체여야만 then, catch 유효하게 동작한다.
    .then(function(result){
        console.log("5초 뒤 실행: ", result);
        menu = result;

        console.log("출력 결과: ", menu);
    })
    .then(function (result){})
    .catch(function (error){
    console.log("에러 처리");
    return;
})
```

### async & await 에러 처리 및 여러 비동기 코드 처리 방법
```javascript
function fetchMenu(callbackFunction){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            let data = {firstMenu: "구독"};

            if(error) {
                // throw new Error();
                reject(error);
            }
            resolve(data);
        }, 5000);
    });
}

async function init(){
    try{
        let menu;
        menu = await fetchMenu();
        await renderPageUI();
        console.log("출력 결과: ", menu);
    }catch (error){
        console.log("에러 처리");   
    }
}

let menu;

// promise 문법으로 작성된 코드
fetchMenu() // Promise 객체여야만 then, catch 유효하게 동작한다.
    .then(function(result){
        console.log("5초 뒤 실행: ", result);
        menu = result;

        console.log("출력 결과: ", menu);
    })
    .then(function (result){})
    .catch(function (error){
    console.log("에러 처리");
    return;
})
```