// <!-- menu open and close logic -->

let menubox = document.querySelector(".menu");
let menuFlag = false;
let iconPallet = document.querySelector(".icon-pallet");
// true->to show the icon pallet, false->hide tools
menubox.addEventListener("click", function (e) {
    menuFlag = !menuFlag;

    if (menuFlag) {
        let iconElement = menubox.children[0];
        iconElement.classList.add("fa-times");
        iconElement.classList.remove("fa-bars");
        iconPallet.style.display = "flex";

    }
    else {
        let iconElement = menubox.children[0];
        iconElement.classList.add("fa-bars");
        iconElement.classList.remove("fa-times");
        iconPallet.style.display = "none";
    }

});