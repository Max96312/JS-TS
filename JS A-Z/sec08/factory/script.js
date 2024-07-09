const createBook = (title, author, isbn) => ({
    title,
    author,
    isbn
});

const book1 = createBook('JavaScript', 'John', 'AB123');
const book2 = createBook(
    'Java',
    '김영한',
    'CD123'
);

console.log(book1);
console.log(book2);