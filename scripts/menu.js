function togglediv(id) {
    var div = document.getElementById(id);
    var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 700;
    if (w <= targetWidth) {     
    div.style.display = div.style.display == "none" ? "contents" : "none";
    }
    else {
    div.style.display = "inline-flex";
    }
}