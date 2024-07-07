// function outerFunction(outVariable){
//     return function innerFunction(innerVariable){
//         console.log('Outer function: ' + outVariable)
//         console.log('Inner function: ' + innerVariable)
//     }
// }
//
// const newFunction = outerFunction('outSide');
// console.log('New Function: ' + newFunction);
// newFunction('inSide');

let a = 'a';

function functionA(){
    let b = 'b';
    function functionB(){
        let c = 'c';
        console.log(a, b, c);
    }
    functionB();
    console.log(a, b);
}

functionA();
