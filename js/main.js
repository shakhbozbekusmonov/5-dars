
var elHeaderBurgerMenu = document.querySelector(".site-header__burger-menu");
var elHeaderCloseMenu = document.querySelector(".site-header__close-menu");
var elHeaderHidden = document.querySelector(".site-header__hidden");
var elOverlay = document.querySelector(".site-header__overlay");

elHeaderBurgerMenu.addEventListener("click", function() {
    elHeaderHidden.classList.add("site-header__show-header");
    elOverlay.classList.add("site-header__show-header");
});

elHeaderCloseMenu.addEventListener("click", function() {
    elHeaderHidden.classList.remove("site-header__show-header");
    elOverlay.classList.remove("site-header__show-header");
});

elOverlay.addEventListener("click", function() {
    elHeaderHidden.classList.remove("site-header__show-header");
    elOverlay.classList.remove("site-header__show-header");
});