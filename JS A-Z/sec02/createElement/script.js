const li = document.createElement('li');

li.className = 'list-group-item';

li.id = 'new-item';

li.setAttribute('name', 'New list item');

const link = document.createElement('a');

link.className = 'alarm-item';

link.innerHTML = 'hi'

li.appendChild(link);

document.querySelector('ul.list-group').appendChild(li)