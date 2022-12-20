/*Start play video button*/
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

document.getElementById("events-playVideo").onclick = function () {
    document.getElementById("events-video").play();
    document.getElementById("events-playVideo").style.visibility = "hidden";
};
document.getElementById("events-video").onclick = function () {
    if(document.getElementById("events-video").played) {
        document.getElementById("events-video").pause();
        document.getElementById("events-playVideo").style.visibility = "initial";
    }
};
/*End play video button*/