let obj = {
    accessory: 'horn',
    animal: 'horse',
    color: 'purple',
    hairType: 'curly'
}

function buildAnimal(animalData){
    let accessory = animalData.accessory,
        animal = animalData.animal,
        color = animalData.color,
        hairType = animalData.hairType;
}

function buildAnimalDestructuring(animalData){
    let {accessory, animal, color, hairType} = animalData;
}

let person = {
    name: 'John',
    age: 25,
    phone: '010-1234-1234',
    address: {
        zipcode: 1234,
        street: 'rainbow',
        number: 42
    }
}

let {address: {zipcode, street, number}} = person;

console.log(zipcode, street, number);

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // [30, 40, 50]

const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const day1 = week[0];
const day2 = week[1];
const day3 = week[2];
console.log(day1);

// const [day1, day2, day3, day4, day5] = week;
// console.log(day1);

const numbers = [1, 2, 3, 4, 5, 6];
// 생략 가능
const [, , three, , five] = numbers;
console.log(three);


// 다른 이름 변수명 사용
const studentDetails = {
    firstName: 'John',
    lastName: 'Doe'
}

const {firstName: fName = 'not given', lastName} = studentDetails;

console.log(fName);
console.log(lastName);

// 사용 사례
var people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            brother: 'Sam Smith',
        },
        age: 20
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones',
        },
        age: 23
    },
];

for(var {name: n, family: {father:f}} of people){
    console.log("Name: " + n + ", Family: " + f);
}

