// Генерируем блоки карточек
let actionACard = '';
    for(let i = 0; i<8; i++){
        actionACard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[0][i].audioSrc}" class="card-audio"></audio>
                    <div class="front-image">
                    <img src="${cards[0][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="front-title">
                    <span>${cards[0][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[0][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[0][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 
let actionBCard = '';
    for(let i = 0; i<8; i++){
        actionBCard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[1][i].audioSrc}" class="card-audio"></audio>
                    <div class="front-image">
                    <img src="${cards[1][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="front-title">
                    <span>${cards[1][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[1][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[1][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 
let animalACard = '';
    for(let i = 0; i<8; i++){
        animalACard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[2][i].audioSrc}" class="card-audio"></audio class="card-image">
                    <div class="front-image">
                    <img src="${cards[2][i].image}" style="width: 296px;">
                    </div>
                    <div class="front-title">
                    <span>${cards[2][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[2][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[2][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 
let animalBCard = '';
    for(let i = 0; i<8; i++){
        animalBCard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[3][i].audioSrc}" class="card-audio"></audio class="card-image">
                    <div class="front-image">
                    <img src="${cards[3][i].image}" style="width: 296px;">
                    </div>
                    <div class="front-title">
                    <span>${cards[3][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[3][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[3][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 
let clothesCard = '';
    for(let i = 0; i<8; i++){
        clothesCard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[4][i].audioSrc}" class="card-audio"></audio>
                    <div class="front-image">
                    <img src="${cards[4][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="front-title">
                    <span>${cards[4][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[4][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[4][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 
let emotionsCard = '';
    for(let i = 0; i<8; i++){
        emotionsCard += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <audio src="${cards[5][i].audioSrc}" class="card-audio"></audio>
                    <div class="front-image">
                    <img src="${cards[5][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="front-title">
                    <span>${cards[5][i].word}</span>
                    </div>
                    <p class="undo"></p>
                </div>
                <div class="flip-card-back">
                    <div class="back-image">
                    <img src="${cards[5][i].image}" style="width: 296px;" class="card-image">
                    </div>
                    <div class="back-title">
                    <span>${cards[5][i].translation}</span>
                    </div>
                </div>
                </div>
            </div>
        `
} 

let actionCCard = '';
for(let i = 0; i<8; i++){
    actionCCard += `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <audio src="${cards[6][i].audioSrc}" class="card-audio"></audio> 
                <div class="front-image">
                <img src="${cards[6][i].image}" style="width: 296px;" class="card-image">
                </div>
                <div class="front-title">
                <span>${cards[6][i].word}</span>
                </div>
                <p class="undo"></p>
            </div>
            <div class="flip-card-back">
                <div class="back-image">
                <img src="${cards[6][i].image}" style="width: 296px;" class="card-image">
                </div>
                <div class="back-title">
                <span>${cards[6][i].translation}</span>
                </div>
            </div>
            </div>
        </div>
    `
} 

let adjectivesCard = '';
for(let i = 0; i<8; i++){
    adjectivesCard += `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <audio src="${cards[7][i].audioSrc}" class="card-audio"></audio>
                <div class="front-image">
                <img src="${cards[7][i].image}" style="width: 296px;" class="card-image">
                </div>
                <div class="front-title">
                <span>${cards[7][i].word}</span>
                </div>
                <p class="undo"></p>
            </div>
            <div class="flip-card-back">
                <div class="back-image">
                <img src="${cards[7][i].image}" style="width: 296px;" class="card-image">
                </div>
                <div class="back-title">
                <span>${cards[7][i].translation}</span>
                </div>
            </div>
            </div>
        </div>
    `
}

ROOT_CARDS.innerHTML = `
    <div class="action-a cards-block">
        ${actionACard}
    </div>
    <div class="action-b cards-block">
        ${actionBCard}
    </div>
    <div class="action-c cards-block">
        ${actionCCard}
    </div>
    <div class="adjectives cards-block">
        ${adjectivesCard}
    </div>
    <div class="animal-a cards-block">
        ${animalACard}
    </div>
    <div class="animal-b cards-block">
        ${animalBCard}
    </div>
    <div class="clothes cards-block">
        ${clothesCard}
    </div>
    <div class="emotions cards-block">
        ${emotionsCard}
    </div>
`
// Ссылки (Меню и категории)
const cardsContainer = document.querySelector("#cards-container");
const categories = document.querySelector("#main-container");
const cardBlocks = document.querySelectorAll(".cards-block");

// cards blocks
const actionA = document.querySelector(".action-a");
const actionB = document.querySelector(".action-b");
const actionC = document.querySelector(".action-c");
const adjectives = document.querySelector(".adjectives");
const animalA = document.querySelector(".animal-a");
const animalB = document.querySelector(".animal-b");
const clothes = document.querySelector(".clothes");
const emotions = document.querySelector(".emotions");

// cards hrefs

const hActionA = document.getElementById("action-a");
const hActionB = document.getElementById("action-b");
const hActionC = document.getElementById("action-c");
const hAdjectives = document.getElementById("adjectives");
const hAnimalA = document.getElementById("animal-a");
const hAnimalB = document.getElementById("animal-b");
const hClothes = document.getElementById("clothes");
const hEmotions = document.getElementById("emotions");
const hMainPage = document.getElementById("main-page");

const hrefs = document.querySelectorAll(".hrefs");

hMainPage.addEventListener('click', ()=>{
    cardBlocks.forEach(elem =>{
        elem.classList.add("hide");
    })
    categories.removeAttribute('id', 'hide');
    categories.setAttribute('id','main-container');
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hMainPage.classList.add("chosen");
    
})

hActionA.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionA.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionA.classList.add("chosen");
});

hActionB.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionB.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionB.classList.add("chosen");
});
hActionC.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionC.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionC.classList.add("chosen");
});
hAdjectives.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    adjectives.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAdjectives.classList.add("chosen");
});
hAnimalA.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    animalA.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAnimalA.classList.add("chosen");
});
hAnimalB.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    animalB.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAnimalB.classList.add("chosen");
});
hClothes.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    clothes.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hClothes.classList.add("chosen");
});
hEmotions.addEventListener('click', ()=> {
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    emotions.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hEmotions.classList.add("chosen");
});

// categories switch

const categ1 = document.querySelector(".categ-1");
const categ2 = document.querySelector(".categ-2");
const categ3 = document.querySelector(".categ-3");
const categ4 = document.querySelector(".categ-4");
const categ5 = document.querySelector(".categ-5");
const categ6 = document.querySelector(".categ-6");
const categ7 = document.querySelector(".categ-7");
const categ8 = document.querySelector(".categ-8");

categ1.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionA.classList.remove("hide");
    $(".menu").fadeOut(); 
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionA.classList.add("chosen");
});
categ2.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionB.classList.remove("hide");
    $(".menu").fadeOut();   
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionB.classList.add("chosen"); 
});
categ3.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    actionC.classList.remove("hide");
    $(".menu").fadeOut();    
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hActionC.classList.add("chosen");
});
categ4.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    adjectives.classList.remove("hide");
    $(".menu").fadeOut();   
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAdjectives.classList.add("chosen"); 
});
categ5.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    animalA.classList.remove("hide");
    $(".menu").fadeOut();  
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAnimalA.classList.add("chosen");  
});
categ6.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    animalB.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hAnimalB.classList.add("chosen");   
});
categ7.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    clothes.classList.remove("hide");
    $(".menu").fadeOut();
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hClothes.classList.add("chosen");    
});
categ8.addEventListener('click', ()=>{
    categories.setAttribute('id', 'hide');
    cardsContainer.classList.remove("hide");
    cardBlocks.forEach(elem => {
        elem.classList.add("hide");
    });
    emotions.classList.remove("hide");
    $(".menu").fadeOut();    
    hrefs.forEach(elem =>{
        elem.classList.remove("chosen");
    })
    hEmotions.classList.add("chosen");
});

const frontTitle = document.querySelectorAll(".front-title");


// Переворот карточек
const flipCard = document.querySelectorAll(".flip-card");
const flipCardInner = document.querySelectorAll(".flip-card-inner");
const undo = document.querySelectorAll(".undo");
const cardBack = document.querySelectorAll(".flip-card-back");
const backImage = document.querySelectorAll(".back-image");
const flipCardBack = document.querySelectorAll(".flip-card-back");


for(let i = 0; i < 64; i++){
    undo[i].addEventListener('click',()=>{
        flipCardInner[i].classList.add("flip-card-inner-flipped");
        undo[i].classList.add("hide");

        flipCardBack[i].addEventListener('mouseout', ()=>{
            undo[i].classList.remove("hide");
            flipCardInner[i].classList.remove("flip-card-inner-flipped");
        })
    })
}

// audio play

const audios = document.querySelectorAll(".card-audio");
const cardImage = document.querySelectorAll(".front-image");
const flipCardFront = document.querySelectorAll(".flip-card-front");

for(let i = 0; i<64; i++){
    flipCardFront[i].addEventListener('click', (event)=>{
        let target = event.target;
        if(target.tagName != "P"){
        audios[i].play();
    }
    })
}

