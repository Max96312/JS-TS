# Form
```
const buttonOutElement = document.querySelector('.btn2-out-form');
console.log(buttonOutElement);

buttonOutElement.addEventListener('click', (event) => {
// event.preventDefault(); // 기본 동작 막기
let val;
val = event.target;
val = event.target.className;

    console.log(val);
});
```
`<form>` 태그에서는 기본적으로 'submit' 이벤트를 트리거 한다.
그렇기 때문에 `event.preventDefault()` 없이는 console에 출력되지 않았던 것이다.
```
const buttonInElement = document.querySelector('.btn2-in-form');
console.log(buttonInElement);

buttonInElement.addEventListener('click', (event) => {
event.preventDefault(); // 기본 동작 막기
let val;
val = event.target;
val = event.target.className;

    console.log(val);
});
```

# Event
### mouse
1. mouse-down
2. mouse-up
3. mouse-click