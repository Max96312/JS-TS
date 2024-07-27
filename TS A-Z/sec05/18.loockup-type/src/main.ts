import {Car3} from './third-party'

interface Car {
    id: number;
    name: string;
    brand: {
        popularity: number;
        logo: string;
        history: number;
    }
}

function updateCarBrand(id: Car['id'], newBrand: Car['brand']) {

}

interface Car2 {
    id: number;
    name: string;
}

type CarId = number;

interface CarBrand{
    popularity: number;
    logo: string;
    history: number;
}

function updateCarBrand2(id: CarId, newBrand: CarBrand){

}

function updateCarBrand3(id: Car3['id'], newBrand: Car3['brand']) {

}