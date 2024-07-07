// This
// Method => Object
const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}

// audio.play();

audio.stop = function() {
    console.log('stop this', this);
}

// audio.stop();

// Function => Window Object
function playAudio() {
    console.log(this);
}

// playAudio();

// Constructor Function => {}
function AudioEmpty(title){
    // this.title = title;
    console.log(this);
}

function Audio(title){
    this.title = title;
    console.log(this);
}

const audioEmpty = new AudioEmpty('a');
const audioConstructorFunction = new Audio('a');

// this -> Window Object 따라서 undefined
const audioRock1 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function (category){
            console.log(`title: ${this.title}, category: ${category}`);
        })
    }
}

// this -> audioFunctionTitle
const audioRock2 = {
    title: 'audioObjectTitle',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function (category){
            console.log(`title: ${this.title}, category: ${category}`);
        }, {title: 'audioFunctionTitle'})
    }
}

// this -> audioObjectTitle
const audioRock3 = {
    title: 'audioObjectTitle',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function (category){
            console.log(`title: ${this.title}, category: ${category}`);
        }, this)
    }
}

// Arrow Function -> 상위 scope의 this를 가리키게 됩니다.
//Lexical this
// audioObjectTitle
const audioRock4 = {
    title: 'audioObjectTitle',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach((category) =>{
            console.log(this);
        })
    }
}

// audioRock1.displayCategories();
// audioRock2.displayCategories();
// audioRock3.displayCategories();
// audioRock4.displayCategories();