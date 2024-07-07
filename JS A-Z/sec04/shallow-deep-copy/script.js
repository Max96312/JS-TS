// shallow copy
// const aArray = [1, 2, 3];
//
// const bArray = [...aArray, 4];
// console.log(bArray);
//
// const cArray = Object.assign([], bArray);
// console.log(cArray);
//
// cArray.push([5,6,7])
// console.log(cArray)
//
// const dArray = [...cArray, 10];
// console.log(dArray);
// dArray[4].push('a');
// console.log(cArray)
// console.log(dArray)

const aObj = {
    "a" : "a",
    "b" : "b",
    "cObj": {"a": 1, "b": 2}
}
//
// Object.freeze(aObj);
// aObj.a = "c";
// console.log(aObj);
//
// aObj.cObj.a = 3;
// console.log(aObj);

const newObj = JSON.parse(JSON.stringify(aObj));
console.log(aObj);
console.log(newObj)
aObj.cObj.a = 3;
console.log(aObj);
console.log(newObj)

const newObj2 = {...aObj, cObj: {...aObj.cObj}}
console.log(newObj2)