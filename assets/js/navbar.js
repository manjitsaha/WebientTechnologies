function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

window.onscroll = function (e) { myFunction(e) };
var nav = document.getElementsByClassName("navbar");
function myFunction(e) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (!nav[0].classList.contains("hide"))
            nav[0].className += " hide";
    } else {
        nav[0].classList.remove("hide");
    }
}