function fetchMenu(callbackFunction){
    // 바로 실행
    // callbackFunction();
    setTimeout(() => {
        // #2
        let data =  { firstMenu: "구독" }
        // 5초 뒤에 실행
        callbackFunction(error, data);
        return data;
    }, 5000);
}

let menu;
menu = fetchMenu(function (error, result){
    if (error){
        console.log("예외 처리");
        return;
    }
    // 호출되면 실행될 코드를 넣어주세요.
    console.log("실행", result);
    menu = result;
    console.log("출력 결과: ", menu);

    renderPageUI(function (error, response){
        response;
        menu;
    })
});

// #1
// console.log(menu);