
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeAdd1 = document.getElementById("home-score-btn-1");
let homeAdd2 = document.getElementById("home-score-btn-2");
let homeAdd3 = document.getElementById("home-score-btn-3");
let homeReset = document.getElementById("reset-home-score");

let guestAdd1 = document.getElementById("guest-score-btn-1");
let guestAdd2 = document.getElementById("guest-score-btn-2");
let guestAdd3 = document.getElementById("guest-score-btn-3");
let guestReset = document.getElementById("reset-guest-score");

homeAdd1.addEventListener("click", () => {
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
})

homeAdd2.addEventListener("click", () => {
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
})

homeAdd3.addEventListener("click", () => {
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
})

homeReset.addEventListener("click", () => {
    homeScore.textContent = 0;
})

guestAdd1.addEventListener("click", () => {
    guestScore.textContent = parseInt(guestScore.textContent) + 1;
})

guestAdd2.addEventListener("click", () => {
    guestScore.textContent = parseInt(guestScore.textContent) + 2;
})

guestAdd3.addEventListener("click", () => {
    guestScore.textContent = parseInt(guestScore.textContent) + 3;
})

guestReset.addEventListener("click", () => {
    guestScore.textContent = 0;
})

