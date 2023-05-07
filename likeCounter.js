const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const resetButton = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

function counterPlus() {
    console.log("plus");
    count++;
    counter.innerText = count;
}
function counterMinus() {
    console.log("minus");
    count--;
    counter.innerText = count;
}
function reset() {
    console.log("reset");
    count = 0;
    counter.innerText = count;
}

likeButton.addEventListener("click", counterPlus);
dislikeButton.addEventListener("click", counterMinus);
resetButton.addEventListener("click", reset);
