const humbergerMenu = document.querySelector(".humbergerMenu");
const navMenuMobile = document.querySelector(".navMenuMobile");
const placeLikesIcon = document.querySelectorAll(".placeLikeIcon");

humbergerMenu.addEventListener("click", function() {

    humbergerMenu.classList.toggle("humbergerMenuOpen");
    navMenuMobile.classList.toggle("navMenuMobileOpen");
})

navMenuMobile.addEventListener("click", function() {
    humbergerMenu.classList.toggle("humbergerMenuOpen");
    navMenuMobile.classList.toggle("navMenuMobileOpen");

})

for (let i = 0; i < placeLikesIcon.length; i++) {
    placeLikesIcon[i].addEventListener("click", function() {

        placeLikesIcon[i].classList.toggle("placeLikedIcon");
    });
}