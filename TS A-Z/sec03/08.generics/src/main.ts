function getArrayLength(arr: number[] | string[] | boolean[]): number{
    return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);

function getArrayLength2<T>(arr: T[]): number{
    return arr.length;
}

getArrayLength2<number>(array1);
getArrayLength2<string>(array2);
getArrayLength2<boolean>(array3);

interface Vehicle{
    name: string;
    color: string;
    option: any;
}

const car:Vehicle = {
    name: 'Car',
    color: 'green',
    option: {
        price: 1000
    }
}

const bike: Vehicle = {
    name: 'Bike',
    color: 'green',
    option: true,
}

interface Vehicle2<T>{
    name: string;
    color: string;
    option: T;
}

const car2:Vehicle2<{price: number}> = {
    name: 'Car',
    color: 'green',
    option: {
        price: 1000
    }
}

const bike2: Vehicle2<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true,
}