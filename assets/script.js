const btnObter = document.getElementById("btn-obter");
const btnBack = document.getElementById("btn-back");
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

function copyCupom() {
    navigator.clipboard.writeText(cupomTxt.innerText);
};

function share() {
    if (navigator.share) {
        navigator.share({
          title: document.title,
          text: "Compartilhar cupom",
          url: window.location.href
        })
        .then()
        .catch(error => console.log('Error sharing:', error));
      }
};