const page = document.querySelector("body");
//Переключение режимов
const switcher = document.querySelector(".switcher");

switcher.addEventListener('click',()=>{
    if(switcher.checked){
        return;
    } 
    else{
        window.location.href = "index.html";
    }
})

//Выигрыш
const wintitle = document.createElement('p');
wintitle.classList.add("wintitle");
wintitle.innerText = "You Pass the game with 0 mistakes!"
const win = document.createElement('img');
win.classList.add("win-image");
win.src = "img/success.jpg";
const winSound = document.createElement('audio');
winSound.src = "audio/success.mp3";


//проигрыш
const mistakes = document.createElement('p');
mistakes.classList.add("mistakes");
const lose = document.createElement('img');
lose.classList.add("lose-image");
lose.src = "img/failure.jpg";
const loseSound = document.createElement('audio');
loseSound.src = "audio//failure.mp3";


//Ошибка 
const reject = document.createElement("audio");
reject.src = "audio/error.mp3";
const correct = document.createElement("audio");
correct.src = "audio/correct.mp3";

// function name()
const audios = document.querySelectorAll(".card-audio");


let soundArr1 = [];
for(let i = 0; i < 8; i++){
    soundArr1.push(audios[i]);
}

const button1 = document.getElementById("button1");
const repeat1 = document.getElementById('repeat1');

let cardsA = document.querySelectorAll(".flip-card");

let currentSound;

function getNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber(randomNumber)){
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber;
    // if(isNumber(randomNumber)) {}
    // else { getNumber(min, max); }
};
let trueSound = [];

function isNumber(number){
    for(let i = 0; i < trueSound.length; i++){
        if(number == trueSound[i]) return false;
    }
    return true;
}

button1.addEventListener('click', soundEvent);

function soundEvent(){
    currentSound = getNumber(0, soundArr1.length)
    button1.classList.add("hide");
    repeat1.classList.remove("hide");
    soundArr1[currentSound].play();
    gamePlay();
// alert(start)

}
repeat1.addEventListener('click', () => {
    soundArr1[currentSound].play();
})

function gamePlay(){
    cardsA.forEach(element => {
        element.addEventListener("click", function gameEvent(){
            if(soundArr1[currentSound] == soundArr1[element.getAttribute("num")]) {
                isTrue();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent);
            } else {
                isFalse();
            }
        });
    });
}


function isWin() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat1.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin();
    }
    else if (stars.length > 8){
        isLose();
    }
}

function isTrue(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    actionA.append(winStar);     
    trueSound.push(currentSound);
    correct.play();
    if(trueSound.length != 8){
        currentSound = getNumber(0, soundArr1.length);  
        setTimeout(() => {soundArr1[currentSound].play() }, 1000);
    } else if(trueSound.length == 8) {
        isEnd();
    }
}

function isFalse(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    actionA.append(star);
}


/**************************************************** */

let soundArr2 = [];
for(let i = 8; i < 16; i++){
    soundArr2.push(audios[i]);
}

const button2 = document.getElementById("button2");
const repeat2 = document.getElementById('repeat2');

let cardsA2 = document.querySelectorAll(".flip-card");

let currentSound2;

function getNumber2(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber2(randomNumber2)){
        randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber2;
    // if(isNumber(randomNumber)) {}
    // else { getNumber(min, max); }
};
let trueSound2 = [];

function isNumber2(number2){
    for(let i = 0; i < trueSound2.length; i++){
        if(number2 == trueSound2[i]) return false;
    }
    return true;
}

button2.addEventListener('click', soundEvent2);

function soundEvent2(){
    currentSound2 = getNumber2(0, soundArr2.length)
    button2.classList.add("hide");
    repeat2.classList.remove("hide");
    soundArr2[currentSound2].play();
    gamePlay2();
// alert(start)

}
repeat2.addEventListener('click', () => {
    soundArr2[currentSound2].play();
})

function gamePlay2(){
    cardsA2.forEach(element => {
        element.addEventListener("click", function gameEvent2(){
            if(soundArr2[currentSound2] == soundArr2[element.getAttribute("num")]) {
                isTrue2();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent2);
            } else {
                isFalse2();
            }
        });
    });
}


function isWin2() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose2() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd2() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat2.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin2();
    }
    else if (stars.length > 8){
        isLose2();
    }
}

function isTrue2(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    actionB.append(winStar);     
    trueSound2.push(currentSound2);
    correct.play();
    if(trueSound2.length != 8){
        currentSound2 = getNumber2(0, soundArr2.length);  
        setTimeout(() => {soundArr2[currentSound2].play() }, 1000);
    } else if(trueSound2.length == 8) {
        isEnd2();
    }
}

function isFalse2(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    actionB.append(star);
}

/********************************************* */ 

let soundArr3 = [];
for(let i = 16; i < 24 ;i++){
    soundArr3.push(audios[i]);
}

const button3 = document.getElementById("button3");
const repeat3 = document.getElementById("repeat3");

let cardsA3 = document.querySelectorAll(".flip-card");

let currentSound3;

function getNumber3(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber3 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber3(randomNumber3)){
        randomNumber3 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber3;
    // if(isNumber(randomNumber)) {}
    // else { getNumber(min, max); }
};
let trueSound3 = [];

function isNumber3(number3){
    for(let i = 0; i < trueSound3.length; i++){
        if(number3 == trueSound3[i]) return false;
    }
    return true;
}

button3.addEventListener('click', soundEvent3);

function soundEvent3(){
    currentSound3 = getNumber3(0, soundArr3.length)
    button3.classList.add("hide");
    repeat3.classList.remove("hide");
    soundArr3[currentSound3].play();
    gamePlay3();

}
repeat3.addEventListener('click', () => {
    soundArr3[currentSound3].play();
})

function gamePlay3(){
    cardsA3.forEach(element => {
        element.addEventListener("click", function gameEvent3(){
            if(soundArr3[currentSound3] == soundArr3[element.getAttribute("num")]) {
                isTrue3();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent3);
            } else {
                isFalse3();
            }
        });
    });
}


function isWin3() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose3() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd3() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat3.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin3();
    }
    else if (stars.length > 8){
        isLose3();
    }
}

function isTrue3(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    actionC.append(winStar);     
    trueSound3.push(currentSound3);
    correct.play();
    if(trueSound3.length != 8){
        currentSound3 = getNumber3(0, soundArr3.length);  
        setTimeout(() => {soundArr3[currentSound3].play() }, 1000);
    } else if(trueSound3.length == 8) {
        isEnd3();
    }
}

function isFalse3(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    actionC.append(star);
}

/********************************************* */ 

let soundArr4 = [];
for(let i = 24; i < 32 ;i++){
    soundArr4.push(audios[i]);
}

const button4 = document.getElementById("button4");
const repeat4 = document.getElementById("repeat4");

let cardsA4 = document.querySelectorAll(".flip-card");

let currentSound4;

function getNumber4(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber4 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber4(randomNumber4)){
        randomNumber4 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber4;
};
let trueSound4 = [];

function isNumber4(number4){
    for(let i = 0; i < trueSound4.length; i++){
        if(number4 == trueSound4[i]) return false;
    }
    return true;
}

button4.addEventListener('click', soundEvent4);

function soundEvent4(){
    currentSound4 = getNumber4(0, soundArr4.length)
    button4.classList.add("hide");
    repeat4.classList.remove("hide");
    soundArr4[currentSound4].play();
    gamePlay4();

}
repeat4.addEventListener('click', () => {
    soundArr4[currentSound4].play();
})

function gamePlay4(){
    cardsA4.forEach(element => {
        element.addEventListener("click", function gameEvent4(){
            if(soundArr4[currentSound4] == soundArr4[element.getAttribute("num")]) {
                isTrue4();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent4);
            } else {
                isFalse4();
            }
        });
    });
}


function isWin4() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose4() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd4() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat4.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin4();
    }
    else if (stars.length > 8){
        isLose4();
    }
}

function isTrue4(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    adjectives.append(winStar);     
    trueSound4.push(currentSound4);
    correct.play();
    if(trueSound4.length != 8){
        currentSound4 = getNumber4(0, soundArr4.length);  
        setTimeout(() => {soundArr4[currentSound4].play() }, 1000);
    } else if(trueSound4.length == 8) {
        isEnd4();
    }
}

function isFalse4(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    adjectives.append(star);
}

// /********************************************* */ 

let soundArr5 = [];
for(let i = 32; i < 40; i++){
    soundArr5.push(audios[i]);
}

const button5 = document.getElementById("button5");
const repeat5 = document.getElementById("repeat5");

let cardsA5 = document.querySelectorAll(".flip-card");

let currentSound5;

function getNumber5(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber5 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber5(randomNumber5)){
        randomNumber5 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber5;
};
let trueSound5 = [];

function isNumber5(number5){
    for(let i = 0; i < trueSound5.length; i++){
        if(number5 == trueSound5[i]) return false;
    }
    return true;
}

button5.addEventListener('click', soundEvent5);

function soundEvent5(){
    currentSound5 = getNumber5(0, soundArr5.length)
    button5.classList.add("hide");
    repeat5.classList.remove("hide");
    soundArr5[currentSound5].play();
    gamePlay5();

}
repeat5.addEventListener('click', () => {
    soundArr5[currentSound5].play();
})

function gamePlay5(){
    cardsA4.forEach(element => {
        element.addEventListener("click", function gameEvent5(){
            if(soundArr5[currentSound5] == soundArr5[element.getAttribute("num")]) {
                isTrue5();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent5);
            } else {
                isFalse5();
            }
        });
    });
}


function isWin5() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose5() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd5() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat5.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin5();
    }
    else if (stars.length > 8){
        isLose5();
    }
}

function isTrue5(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    animalA.append(winStar);     
    trueSound5.push(currentSound5);
    correct.play();
    if(trueSound5.length != 8){
        currentSound5 = getNumber5(0, soundArr5.length);  
        setTimeout(() => {soundArr5[currentSound5].play() }, 1000);
    } else if(trueSound5.length == 8) {
        isEnd5();
    }
}

function isFalse5(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    animalA.append(star);
}


// /********************************************* */ 

let soundArr6 = [];
for(let i = 40; i < 48; i++){
    soundArr6.push(audios[i]);
}

const button6 = document.getElementById("button6");
const repeat6 = document.getElementById("repeat6");

let cardsA6 = document.querySelectorAll(".flip-card");

let currentSound6;

function getNumber6(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber6 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber6(randomNumber6)){
        randomNumber6 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber6;
};
let trueSound6 = [];

function isNumber6(number6){
    for(let i = 0; i < trueSound6.length; i++){
        if(number6 == trueSound6[i]) return false;
    }
    return true;
}

button6.addEventListener('click', soundEvent6);

function soundEvent6(){
    currentSound6 = getNumber6(0, soundArr5.length)
    button6.classList.add("hide");
    repeat6.classList.remove("hide");
    soundArr6[currentSound6].play();
    gamePlay6();

}
repeat6.addEventListener('click', () => {
    soundArr6[currentSound6].play();
})

function gamePlay6(){
    cardsA6.forEach(element => {
        element.addEventListener("click", function gameEvent6(){
            if(soundArr6[currentSound6] == soundArr6[element.getAttribute("num")]) {
                isTrue6();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent6);
            } else {
                isFalse6();
            }
        });
    });
}


function isWin6() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose6() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd6() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat6.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin6();
    }
    else if (stars.length > 8){
        isLose6();
    }
}

function isTrue6(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    animalB.append(winStar);     
    trueSound6.push(currentSound6);
    correct.play();
    if(trueSound6.length != 8){
        currentSound6 = getNumber6(0, soundArr6.length);  
        setTimeout(() => {soundArr6[currentSound6].play() }, 1000);
    } else if(trueSound6.length == 8) {
        isEnd6();
    }
}

function isFalse6(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    animalB.append(star);
}

// /********************************************* */ 

let soundArr7 = [];
for(let i = 48; i < 56; i++){
    soundArr7.push(audios[i]);
}

const button7 = document.getElementById("button7");
const repeat7 = document.getElementById("repeat7");

let cardsA7 = document.querySelectorAll(".flip-card");

let currentSound7;

function getNumber7(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber7 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber7(randomNumber7)){
        randomNumber7 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber7;
};
let trueSound7 = [];

function isNumber7(number7){
    for(let i = 0; i < trueSound7.length; i++){
        if(number7 == trueSound7[i]) return false;
    }
    return true;
}

button7.addEventListener('click', soundEvent7);

function soundEvent7(){
    currentSound7 = getNumber7(0, soundArr7.length)
    button7.classList.add("hide");
    repeat7.classList.remove("hide");
    soundArr7[currentSound7].play();
    gamePlay7();

}
repeat7.addEventListener('click', () => {
    soundArr7[currentSound7].play();
})

function gamePlay7(){
    cardsA7.forEach(element => {
        element.addEventListener("click", function gameEvent7(){
            if(soundArr7[currentSound7] == soundArr7[element.getAttribute("num")]) {
                isTrue7();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent7);
            } else {
                isFalse7();
            }
        });
    });
}


function isWin7() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose7() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd7() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat7.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin7();
    }
    else if (stars.length > 8){
        isLose7();
    }
}

function isTrue7(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    clothes.append(winStar);     
    trueSound7.push(currentSound7);
    correct.play();
    if(trueSound7.length != 8){
        currentSound7 = getNumber7(0, soundArr7.length);  
        setTimeout(() => {soundArr7[currentSound7].play() }, 1000);
    } else if(trueSound7.length == 8) {
        isEnd7();
    }
}

function isFalse7(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    clothes.append(star);
}

// /********************************************* */ 

let soundArr8 = [];
for(let i = 56; i < 64; i++){
    soundArr8.push(audios[i]);
}

const button8 = document.getElementById("button8");
const repeat8 = document.getElementById("repeat8");

let cardsA8 = document.querySelectorAll(".flip-card");

let currentSound8;

function getNumber8(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber8 = Math.floor(Math.random() * (max - min)) + min;
    while(!isNumber8(randomNumber8)){
        randomNumber8 = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber8;
};
let trueSound8 = [];

function isNumber8(number8){
    for(let i = 0; i < trueSound8.length; i++){
        if(number8 == trueSound8[i]) return false;
    }
    return true;
}

button8.addEventListener('click', soundEvent8);

function soundEvent8(){
    currentSound8 = getNumber8(0, soundArr8.length)
    button8.classList.add("hide");
    repeat8.classList.remove("hide");
    soundArr8[currentSound8].play();
    gamePlay8();

}
repeat8.addEventListener('click', () => {
    soundArr8[currentSound8].play();
})

function gamePlay8(){
    cardsA8.forEach(element => {
        element.addEventListener("click", function gameEvent8(){
            if(soundArr8[currentSound8] == soundArr8[element.getAttribute("num")]) {
                isTrue8();
                element.classList.add("opacity");         
                // button1.removeEventListener('click', soundEvent);
                element.removeEventListener("click", gameEvent8);
            } else {
                isFalse8();
            }
        });
    });
}


function isWin8() {
    page.append(win); 
    page.append(wintitle);
    winSound.play();
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   
};
function isLose8() {
    loseSound.play();
    page.append(lose);
    page.append(mistakes);
    setTimeout(()=>{
        window.location = "game.html"}, 2000)   

};

function isEnd8() { 
    ROOT_HEADER.classList.add("hide");
    ROOT_CARDS.classList.add("hide");
    repeat8.classList.add("hide");
    let stars = document.querySelectorAll(".star"); 
    if(stars.length == 8){
        isWin8();
    }
    else if (stars.length > 8){
        isLose8();
    }
}

function isTrue8(){
    const winStar = document.createElement("img");
    winStar.src = "img/star-win.svg";
    winStar.classList.add("star");
    emotions.append(winStar);     
    trueSound8.push(currentSound8);
    correct.play();
    if(trueSound8.length != 8){
        currentSound8 = getNumber8(0, soundArr8.length);  
        setTimeout(() => {soundArr8[currentSound8].play() }, 1000);
    } else if(trueSound8.length == 8) {
        isEnd8();
    }
}

function isFalse8(){
    // alert("false")
    const star = document.createElement("img");
    star.src = "img/star.svg";
    star.classList.add("star");
    reject.play();
    emotions.append(star);
}

// /********************************************* */ 
