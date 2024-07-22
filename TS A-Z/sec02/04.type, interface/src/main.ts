interface Animal{
    name: string;
}

interface Bear extends Animal{
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}

type Animal2 = {
    name: string;
}

type Bear2 = Animal2 &{
    honey: boolean;
}

const bear2: Bear = {
    name: 'honey bear',
    honey: true,
}

interface Car{
    name: string;
}

interface Car{
    type: string;
}

const myCar: Car = {
    name: 'nice car',
    type: 'GV80',
}

// Error
// type food = {
//     name: string;
// }
//
// type food = {
//     rate: number;
// }