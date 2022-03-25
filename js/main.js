/*Hamburger menu:
mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile). */

//Variabili

let menuOn = document.querySelector(".fas.fa-bars");

let hamburgerMenu = document.querySelector(".hamburger-menu");

let menuClose = document.querySelector(".fas.fa-times");

console.log(menuOn, hamburgerMenu, menuClose);

//Event listeners

menuOn.addEventListener("click", function () {
  hamburgerMenu.style.display = "inline-block";
});

menuClose.addEventListener("click", function () {
  hamburgerMenu.style.display = "none";
});
