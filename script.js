function darkMode() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "lightgray";
    document.getElementById("btnLight").style.display = "block";
    document.getElementById("btnDark").style.display = "none";
    document.getElementById("header").style.borderBottom = "solid 2px lightgray";
}
function lightMode() {
    document.getElementById("body").style.backgroundColor = "lightgray";
    document.getElementById("body").style.color = "black";
    document.getElementById("btnLight").style.display = "none";
    document.getElementById("btnDark").style.display = "block";
    document.getElementById("header").style.borderBottom = "solid 2px black";
}