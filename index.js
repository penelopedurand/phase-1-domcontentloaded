// Your code goes here
const newP = document.querySelector ('#text')
function beLoaded () {
    newP.textContent = "This is really cool!";
}
document.addEventListener ('DOMContentLoaded', beLoaded)
