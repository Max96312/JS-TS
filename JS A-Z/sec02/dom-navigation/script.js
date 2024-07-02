let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

// console.log(list);
// console.log(listItem);

// NodeType
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;
val = list.childNodes[1];
val = list.childNodes[1].nodeType;

val = list.children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);