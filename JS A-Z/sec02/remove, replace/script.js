const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

// remove element
// listParent.removeChild(list[0]);

// replace element
const oldElement = document.getElementById('a');
const newElement = document.createElement('span');

newElement.textContent = 'Hi';

oldElement.parentElement.replaceChild(newElement, oldElement);