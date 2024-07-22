// const bodyElement = document.querySelector('body')
// bodyElement.innerHTML = 'Hello World!'; // Error

const bodyElement = document.querySelector('body') as HTMLElement;
bodyElement.innerHTML = 'Hello World!';

const bodyElement2 = document.querySelector('body')
bodyElement2!.innerHTML = 'Hello World!';

const bodyElement3 = document.querySelector('body')
if(bodyElement3){
    bodyElement3.innerHTML = 'Hello World!';
}

// type assertion error
function func(arg: string | null){
    return (arg as string).toLowerCase();
}

func('hello');
func(null);

function func2(arg: string | null){
    if(arg){
        return arg.toLowerCase();
    }
}

func2('hello');
func2(null);