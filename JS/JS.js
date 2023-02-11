/*Start Event Listeners*/

window.addEventListener("beforeunload", function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

/*Start Play Video Event Listener*/

/*Global Variables*/
let playBtn = document.querySelectorAll(".playVideo");
let videos = document.querySelectorAll("video");
let upButton = document.querySelector(".up");

for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener("click", function () {
        videos[i].play();
        playBtn[i].style.visibility = "hidden";
    });
}
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", function () {
        if (videos[i].played) {
            videos[i].pause();
            playBtn[i].style.visibility = "initial";
        }
    });
}

/*End Play Video Event Listener*/

/*Start Nav-link Event Listener*/
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
        document.querySelector("#offCanvasNavbar").classList.remove("show");
    }
});

/*End Nav-link Event Listener*/

/*Start Up Button Event Listener*/

//Display Up Button
window.addEventListener("scroll", function () {
    if (window.scrollY >= 400) {
        upButton.style.display = "block";
    } else
        upButton.style.display = "none";
});

//Add Up Button Click Event
upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/*End Up Button Event Listener*/

/*End Event Listeners*/