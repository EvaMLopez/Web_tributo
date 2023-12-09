/* function toggleCard(btn) {
    var card = btn.closest(".card");
    card.querySelector(".cardFront").style.display = "none";
    card.querySelector(".cardBack").style.display = "block";
    card.querySelector(".cardBack").classList.toggle("d-none");
    card.querySelector(".cardFront").classList.toggle("d-none");
}

*/
/* const card = document.querySelector("card");
function toggleCard() {
    card.querySelector(".cardFront").style.display = "d-none";
    card.querySelector(".cardBack").style.display = "d-inline";
}
btn.addEventListener("click", toggleCard);

 */


 // ASI FUNCIONA SOLO EL PRIMER VOLTEO

/* function toggleCard(button) {
    const cardFront = button.parentNode;
    const cardBack = button.parentNode.nextElementSibling;

    cardFront.classList.add("flip");
    cardBack.classList.remove("flip");
}

function toggleBack(button) {
    const cardBack = button.parentNode;
    const cardFront = button.parentNode.previousElementSibling;

    cardBack.classList.add("flip");
    cardFront.classList.remove("flip");
}


const btnsCD = document.querySelectorAll('.btnCD');
btnsCD.forEach(btn => {
    btn.addEventListener('click', function() {
        toggleCard(this);
    });
});


const btnsVolver = document.querySelectorAll('.btnCDBack');
btnsVolver.forEach(btn => {
    btn.addEventListener('click', function() {
        toggleBack(this);
    });
});
 */



/* 
// CODIGO FLIP CARD
const card = document.querySelector(".containerCard");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

 */



const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});