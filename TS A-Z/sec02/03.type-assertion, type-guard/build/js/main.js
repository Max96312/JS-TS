"use strict";
// const bodyElement = document.querySelector('body')
// bodyElement.innerHTML = 'Hello World!'; // Error
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = 'Hello World!';
const bodyElement2 = document.querySelector('body');
bodyElement2.innerHTML = 'Hello World!';
const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerHTML = 'Hello World!';
}
function func(arg) {
    return arg.toLowerCase();
}
func('hello');
func(null);
