// let user = {
//     name: "John",
//     age: 45,
//     email: "john@gmail.com",
// }
//
// console.log(user.name);
// console.log(user.hasOwnProperty('email'));
// console.log(user);

function Person(name, email, birthday){
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = birthday;
    // this.name = name;
    // this.email = email;
    // this.birthday = birthday;
    // this.calculateAge = function (){
    //     const diff = Date.new() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
    return person;
}

// Person.prototype.calculateAge = function (){
//
//     const diff = Date.new() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

const personsPrototype = {
    calculateAge() {
        const diff = Date.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('john', 'john@gmail.com', '7-10-91');
const han = new Person('han', 'john@gmail.com', '2-11-98');
console.log(john);
console.log(han);
