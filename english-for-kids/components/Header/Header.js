ROOT_HEADER.innerHTML = `
    <img src="imghtml/menu.png" class="menu-icon">
    <h1 class="header-text">English For Kids</h1>
    <div class="switcher">
        <input type="checkbox" id="checkbox">
        <label for="checkbox"></label>
    </div>
`

const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");

menuIcon.addEventListener('click', ()=>{
    $(".menu").fadeIn();
})

closeMenu.addEventListener('click', ()=>{
    $(".menu").fadeOut();
})





