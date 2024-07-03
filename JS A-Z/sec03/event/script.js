// window.onload = function () {
//     let text = document.getElementById('text');
//     text.innerText = 'HTML 문서 loaded';
// }

// const aElement = document.querySelector('a');
//
// aElement.addEventListener('click', () => {
//     alert('a element click')
// })

// const buttonOutElement = document.querySelector('.btn2-out-form');
// console.log(buttonOutElement);
//
// buttonOutElement.addEventListener('click', (event) => {
//     // event.preventDefault(); // 기본 동작 막기
//     let val;
//     val = event.target;
//     val = event.target.className;
//
//     console.log(val);
// });
//
// const buttonInElement = document.querySelector('.btn2-in-form');
// console.log(buttonInElement);
//
// buttonInElement.addEventListener('click', (event) => {
//     event.preventDefault(); // 기본 동작 막기
//     let val;
//     val = event.target;
//     val = event.target.className;
//
//     console.log(val);
// });

// const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('form');
// const title = document.querySelector('h2');

// Event Click
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseenter', handleEvent);
// submitBtn.addEventListener('mouseleave', handleEvent);
// submitBtn.addEventListener('mousemove', handleEvent);

// function handleEvent(e){
//     e.preventDefault();
//     console.log(`Event Type: ${e.type}`);
//     title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// }

const form = document.querySelector('form');
const title = document.querySelector('h2');
const emailInput = document.getElementById('email');

//Event Form
form.addEventListener('submit', handleEvent)
emailInput.addEventListener('keydown', handleEvent)
emailInput.addEventListener('keyup', handleEvent)
emailInput.addEventListener('keypress', handleEvent)
emailInput.addEventListener('focus', handleEvent)
emailInput.addEventListener('blur', handleEvent)
emailInput.addEventListener('cut', handleEvent)
emailInput.addEventListener('paste', handleEvent)
emailInput.addEventListener('input', handleEvent) // input 요소가 달라졌을 때 발동하는 event

function handleEvent(e){
    if(e.type === 'submit'){
        e.preventDefault();
    }
    console.log(`Event Type: ${e.type}`);
    title.textContent = e.target.value;
}