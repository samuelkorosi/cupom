const btnObter = document.getElementById("btn-obter");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");

const btnBack = document.getElementById("btn-back");
const btnCopy = document.getElementById("btn-copy");
const cupomTxt = document.getElementById("cupom");

btnObter.addEventListener("click", x => {
    console.log("Obter cupom!");

    console.log("Front:");
    console.log(cardFront);
    console.log("Back:");
    console.log(cardBack);

    cardFront.classList.add("hidden");
    cardBack.classList.remove("hidden");
});

btnBack.addEventListener("click", x => {
    console.log("Usar cupom!");

    cardFront.classList.remove("hidden");
    cardBack.classList.add("hidden");
});

btnCopy.addEventListener("click", x => {
    navigator.clipboard.writeText(cupomTxt.innerText);
});