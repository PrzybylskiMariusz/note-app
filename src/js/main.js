

const tabLeft = document.querySelector('.navigation__edit--js');
const tabRight = document.querySelector('.navigation__note--js');

console.log(tabRight);

const noteLeft = document.querySelector('.note--left--js');
const noteRight = document.querySelector('.note--right--js');

tabRight.addEventListener("click", (e) => {
    noteLeft.style.display = "none";
    noteRight.style.display = "block";
})
