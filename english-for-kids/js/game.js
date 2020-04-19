// Переключение режимов
const switcher = document.querySelector(".switcher");

switcher.addEventListener('click',()=>{
    if(switcher.checked){
        return;
    } 
    else{
        window.location.href = "index.html";
    }
})

const audios = document.querySelectorAll(".card-audio");

let soundArr1 = [];
for(let i = 0; i < 8; i++){
    soundArr1.push(audios[i]);
}

let soundArr2 = [];
for(let i = 8; i < 16; i++){
    soundArr2.push(audios[i]);
}

let soundArr3 = [];
for(let i = 16; i < 24 ;i++){
    soundArr3.push(audios[i]);
}

let soundArr4 = [];
for(let i = 24; i < 32; i++){
    soundArr4.push(audios[i]);
}

let soundArr5 = [];
for(let i = 32; i < 40; i++){
    soundArr5.push(audios[i]);
}

let soundArr6 = [];
for(let i = 40; i < 48; i++){
    soundArr6.push(audios[i]);
}

let soundArr7 = [];
for(let i = 48; i < 56; i++){
    soundArr7.push(audios[i]);
}

let soundArr8 = [];
for(let i = 56; i < 64; i++){
    soundArr8.push(audios[i]);
}

const button1 = document.getElementById("button1");

function getNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
for(let i = 0; i < 8; i++){
    let currentSound = getNumber(0, soundArr1.length);

    button1.addEventListener('click', ()=>{
        button1.classList.add("play-button");
        button1.innerText = "Repeat";
        soundArr1[currentSound].play();
        actionA.addEventListener('click', (event)=>{
            let chosenCard = event.target;
            if(chosenCard.tagName = "AUDIO"){
                return;
            }
            else{
                let chosenSound = chosenCard.closest("audio");
                console.log(chosenSound);
            }
            
        })
        
        
    })
}








// startButton.addEventListener('click', ()=>{
    // let cardsArr = [];
    // for(let i = 0; i < 8; i++){
    //     cardsArr.push(audios[i]);
    // }

    // function getNumber(min, max){
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }
    
    // for(let i = 0; i < 8; i++){
    //     let currentSound = getNumber(0, cardsArr.length);
    //     cardsArr[currentSound].play();
    //     flipCardFront[i].addEventListener('click', getCurrentCard);   
    //     }
    // }) 


    // categoriesHeader.forEach(element => {
        //     element.classList.add("game-mode");
        //     undo.forEach(elem=>{
        //         elem.classList.add("hide");
        //     });
        //     frontTitle.forEach(elem=>{
        //         elem.classList.add("hide");
        //     });

        // flipCardFront.forEach(elem=>{
        //     elem.removeEventListener('click', (event)=>{
        //             let target = event.target;
        //             if(target.tagName != "P"){
        //             audios[i].play(); 
        //         }
        //     })
        // })
        
        
        

            // Звук по нажатию клавиши
        
    // ?