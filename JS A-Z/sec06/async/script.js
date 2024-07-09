async function makeRequests() {
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    } catch (error){
        console.error(error);
    } finally {
        console.log('---모든 작업 ---')
    }
}

makeRequests();