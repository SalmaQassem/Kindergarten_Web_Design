document.getElementById("playVideo").onclick = function () {
    document.getElementById("video").play();
    document.getElementById("playVideo").style.visibility = "hidden";
};
document.getElementById("video").onclick = function () {
    if(document.getElementById("video").played) {
        document.getElementById("video").pause();
        document.getElementById("playVideo").style.visibility = "initial";
    }
};