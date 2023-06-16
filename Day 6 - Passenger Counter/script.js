let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    countEl.innerText++;
}

function save() {
    saveEl.textContent += countEl.innerText + " - ";
    countEl.innerText = 0;
}