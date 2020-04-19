ROOT_MAIN.innerHTML = `
    <div class="card mb-3 categ-1">
    <h3 class="card-header">Action (Set A)</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/dance.jpg" alt="Card image">
    </div>

    <div class="card mb-3 categ-2">
    <h3 class="card-header">Action (Set B)</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/swim.jpg"  alt="Card image">
    </div>

    <div class="card mb-3 categ-3">
    <h3 class="card-header">Action (Set C)</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/setCimage.jpg" alt="Card image">
    </div>

    <div class="card mb-3 categ-4">
    <h3 class="card-header">Adjectives</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/adjectivesImage.jpg"  alt="Card image">
    </div>

    <div class="card mb-3 categ-5">
    <h3 class="card-header">Animal(Set A)</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/cat.jpg"  alt="Card image">
    </div>

    <div class="card mb-3 categ-6">
    <h3 class="card-header">Animal(Set B)</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/bird.jpg" alt="Card image">
    </div>

    <div class="card mb-3 categ-7">
    <h3 class="card-header ">Clothes</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/blouse.jpg" alt="Card image">
    </div>

    <div class="card mb-3 categ-8">
    <h3 class="card-header">Emotions</h3>
    <img style="height: 200px; width: 100%; display: block;" src="img/smile.jpg"  alt="Card image">
    </div>
`

const switcher = document.getElementById("checkbox");
const categoriesHeader = document.querySelectorAll(".card-header");

