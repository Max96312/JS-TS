// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // 비동기 요청
//         const success = true;
//         if (success){
//             resolve('성공');
//         }else {
//             reject('실패');
//         }
//     })
// }
//
// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

fetch('http://jsonplaceholder.typicode.com/todos/1')
    // .then(res => console.log(res));
    .then(res => res.json())
    .then(json => console.log(json))
    .then(() => fetch('ㅁㄴㅇㄹhttp://jsonplaceholder.typicode.com/todos/2'))
    .then(res2 => res2.json())
    .then(json2 => console.log(json2))
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('작업 끝');
    })