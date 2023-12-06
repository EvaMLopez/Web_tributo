function toggleCard(btn) {
    var card = btn.closest(".card");
    card.querySelector(".cardFront").style.display = "none";
    card.querySelector(".cardBack").style.display = "block";
    card.querySelector(".cardBack").classList.toggle("d-none");
    card.querySelector(".cardFront").classList.toggle("d-none");
}