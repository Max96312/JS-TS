class Person{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce(){
        return `Hello my name is ${this.name} !`;
    }
}

class Client extends Person{
    constructor(name, email, phone, address){
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('john', 'john@gmail.com', '010-1234-1234', '서울');
console.log(john.introduce());