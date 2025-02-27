const btnObter = document.getElementById("btn-obter");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");

const btnBack = document.getElementById("btn-back");
const btnCopy = document.getElementById("btn-copy");
const cupomTxt = document.getElementById("cupom");

const flipCard = document.getElementById("flip-card");

btnObter.addEventListener("click", x => {
    console.log("Obter cupom!");

    flipCard.classList.add("clicked");
});

btnBack.addEventListener("click", x => {
    console.log("Usar cupom!");
    flipCard.classList.remove("clicked");
});

btnCopy.addEventListener("click", x => {
    navigator.clipboard.writeText(cupomTxt.innerText);
});