/*Start Event Listeners*/

window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});

/*Start play video button*/
document.getElementById("playVideo").addEventListener("click", function () {
    document.getElementById("video").play();
    document.getElementById("playVideo").style.visibility = "hidden";
});
document.getElementById("video").addEventListener("click", function () {
    if (document.getElementById("video").played) {
        document.getElementById("video").pause();
        document.getElementById("playVideo").style.visibility = "initial";
    }
});

document.getElementById("events-playVideo").addEventListener("click", function () {
    document.getElementById("events-video").play();
    document.getElementById("events-playVideo").style.visibility = "hidden";
});
document.getElementById("events-video").addEventListener("click", function () {
    if (document.getElementById("events-video").played) {
        document.getElementById("events-video").pause();
        document.getElementById("events-playVideo").style.visibility = "initial";
    }
});
/*End play video button*/

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
        document.querySelector("#offCanvasNavbar").classList.remove("show");
    }
});
/*End Event Listeners*/