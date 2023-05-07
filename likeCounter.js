const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const resetButton = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

function counterPlus() {
    console.log("plus");
    count++;
    counter.innerText = count;
    if (count >= 10) {
        document.body.style.backgroundColor = "rgb(253, 186, 116)";
    } else if (count > -10) {
        document.body.style.backgroundColor = "white";
    }
}
function counterMinus() {
    console.log("minus");
    count--;
    counter.innerText = count;
    if (count <= -10) {
        document.body.style.backgroundColor = "rgb(103, 232, 249)";
    } else if (count < 10) {
        document.body.style.backgroundColor = "white";
    }
}
function reset() {
    console.log("reset");
    count = 0;
    counter.innerText = count;
    document.body.style.backgroundColor = "white";
}

likeButton.addEventListener("click", counterPlus);
dislikeButton.addEventListener("click", counterMinus);
resetButton.addEventListener("click", reset);
