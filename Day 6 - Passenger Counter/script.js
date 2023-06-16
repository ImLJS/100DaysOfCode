let countEl = document.getElementById("count-el");

function increment() {
    countEl.innerText++;
}

function save() {
    console.log(countEl.innerText);
}