function togglenav() {
    var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 600;
    if (w <= targetWidth) {     
    document.getElementById("nav").style.height = document.getElementById("nav").style.height == "auto" ? "60px" : "auto";
    }
}