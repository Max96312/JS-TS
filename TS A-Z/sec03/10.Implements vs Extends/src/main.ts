class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    drive(){
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

class Ford extends Car{
}

const myFord = new Ford();
myFord.mileage = 100;

// Error
// class Ford2 implements Car{
// }

interface Part {
    seats: number;
    tire: number;
}

class Ford2 implements Car, Part{
    mileage = 0;
    price = 100;
    color = 'white';

    seats = 2;
    tire = 4;

    drive(){
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}