```
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
```


1. `반환 값 없음`
```
function buildAnimalDestructuring(animalData){
    let {accessory, animal, color, hairType} = animalData;
}
console.log(buildAnimalDestructuring(obj));
```
`undefined 출력`  

2. `기존 객체 반환`
```
function buildAnimalDestructuring(animalData){
    let {accessory, animal, color, hairType} = animalData;
    return animalData;
}
console.log(buildAnimalDestructuring(obj));
```
`기존 {accessory: 'horn', animal: 'horse', color: 'purple', hairType: 'curly'} 객체 출력`  

3. `새로운 객체 반환`
```
function buildAnimalDestructuring(animalData){
    let {accessory, animal, color, hairType} = animalData;
    return return {accessory, animal, color, hairType};
}
console.log(buildAnimalDestructuring(obj));
```
`새로운 {accessory: 'horn', animal: 'horse', color: 'purple', hairType: 'curly'} 객체 생성 후 출력`