

const tabLeft = document.querySelector('.navigation__edit--js');
const tabRight = document.querySelector('.navigation__note--js');

console.log(tabRight);

const noteLeft = document.querySelector('.note--left--js');
const noteRight = document.querySelector('.note--right--js');

tabRight.addEventListener("click", (e) => {
    noteLeft.classList.add('note--invisable');
    noteRight.classList.remove('note--invisable');
});

tabLeft.addEventListener("click", (e) => {
    noteLeft.classList.remove('note--invisable');
    noteRight.classList.add('note--invisable');
});

const inputTitle = document.querySelector('.note__input--js');
const inputText = document.querySelector('.note__textarea--js');
const saveButton = document.querySelector('.note__save--js');
const deleteButton = document.querySelector('.note__delete--js');
const saveHeading = document.querySelector('.saved__heading--js');
const saveText = document.querySelector('.saved__text--js');
const unsaved = document.querySelector('.saved__unsaved--js');
const savedContent = document.querySelector('.saved__content--js');


inputTitle.addEventListener('keyup', (e) => {
    localStorage.setItem('inputTitle', e.target.value);
});

inputText.addEventListener('keyup', (e) => {
    localStorage.setItem('inputText', e.target.value);
})

if(localStorage.getItem('inputTitle') || localStorage.getItem('inputText')) {
    inputTitle.value = localStorage.getItem('inputTitle');
    inputText.value = localStorage.getItem('inputText');
    
}

saveButton.addEventListener('click', (e) => {
    saveHeading.innerHTML = inputTitle.value;
    saveText.innerHTML = inputText.value;
    localStorage.setItem('saveHeading', saveHeading.innerHTML);
    localStorage.setItem('saveText', saveText.innerHTML)
})

if(localStorage.getItem('saveHeading')) {
    saveHeading.innerHTML = localStorage.getItem('saveHeading');
    saveText.innerHTML = localStorage.getItem('saveText');
    unsaved.classList.add('saved__unsaved--hide');
    savedContent.classList.remove('saved__unsaved--hide');
}

if(localStorage.getItem('saveText')) {
    saveText.innerHTML = localStorage.getItem('saveText');
    unsaved.classList.add('saved__unsaved--hide');
    savedContent.classList.remove('saved__unsaved--hide');
}

deleteButton.addEventListener('click', (e) => {
    localStorage.removeItem('inputTitle');
    localStorage.removeItem('inputText');
    localStorage.removeItem('saveHeading');
    localStorage.removeItem('saveText');
    inputTitle.value = "";
    inputText.value = "";
})