function rengchanger(event) {
    var box = document.getElementById("box");
    var x = event.clientX;
    var y = event.clientY;

    var r = x % 255
    var g = y % 255
    var b = ((r + g) % 255);
    box.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    let span=document.querySelector("span");
    span.textContent="ARGIBI(" + r + ", " + g + ", " + b + ")";
}
