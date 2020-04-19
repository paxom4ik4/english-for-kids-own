const body = document.querySelector("body");
const menu = document.querySelector(".menu");

switcher.addEventListener('click',()=>{
    if(switcher.checked){
        window.location.href = "game.html";
    } 
    else{
        return;
    }
})

