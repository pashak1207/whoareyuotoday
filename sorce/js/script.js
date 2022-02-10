document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchstart", handleTouchStart, false);

var rotateYY = 0;
var rotateXX = 0;

var rotateX = 0;
var rotateX2 = 0;

var rotateY = 0;
var rotateY2 = 0;

function handleTouchStart(event) {
    const fTouch = event.touches[0];

    rotateX = fTouch.clientX;
    rotateY = fTouch.clientY;
}

function handleTouchMove(event) {
    if (!rotateX || !rotateY) {
        return false;
    }

    rotateX2 = event.touches[0].clientX;
    rotateY2 = event.touches[0].clientY;

    rotateXX = rotateX2 - rotateX;
    rotateYY = rotateY - rotateY2;

    document.querySelector(".cube").style.transform =
        "rotateY(" + rotateXX / 2 + "deg)" +
        "rotateX(" + rotateYY / 2 + "deg)";
}


document.onkeydown = function (e) {
    if (e.keyCode === 37) rotateYY -= 4
    else if (e.keyCode === 38) rotateXX += 4
    else if (e.keyCode === 39) rotateYY += 4
    else if (e.keyCode === 40) rotateXX -= 4

    document.querySelector(".cube").style.transform =
        "rotateY(" + rotateYY + "deg)" +
        "rotateX(" + rotateXX + "deg)";
}