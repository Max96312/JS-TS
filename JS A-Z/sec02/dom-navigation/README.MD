# Node Type
# childNodes vs children
#text 포함 여부
```html
<div id="body-container" class="container mt-5">
    <ul class="list-group mt-5 mb-5">
        <li class="list-group-item 1">An Item</li>
        <li class="list-group-item 2">A Second item</li>
        <li class="list-group-item 3">A third item</li>
        <li class="list-group-item 4">A fourth item</li>
        <li class="list-group-item 5">And a fifth one</li>
    </ul>
</div>
```
```
div#body-container.container.mt-5
  #text: "\n    "
  ul.list-group.mt-5.mb-5
    #text: "\n        "
    li.list-group-item.1
      #text: "An Item"
    #text: "\n        "
    li.list-group-item.2
      #text: "A Second item"
    #text: "\n        "
    li.list-group-item.3
      #text: "A third item"
    #text: "\n        "
    li.list-group-item.4
      #text: "A fourth item"
    #text: "\n        "
    li.list-group-item.5
      #text: "And a fifth one"
    #text: "\n    "
  #text: "\n"
```

