const playto = document.querySelector("#playto");
const reset = document.querySelector("#reset");

const p1 = {
  score: 0,
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Button"),
};

const p2 = {
  score: 0,
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Button"),
};

let winCondition = 3;

function resetGame() {
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.display.style.color = "black";
  p2.display.style.color = "black";
  p1.display.textContent = 0;
  p2.display.textContent = 0;
}

function playGame(player, opponent) {
  player.score = parseInt(player.display.textContent) + 1;
  player.display.textContent = player.score;
  if (player.score === parseInt(winCondition)) {
    player.button.disabled = true;
    opponent.button.disabled = true;
    player.display.style.color = "green";
    opponent.display.style.color = "red";
  }
}

playto.addEventListener("change", function (e) {
  winCondition = this.value;
  resetGame();
});

p1.button.addEventListener("click", function () {
  playGame(p1, p2);
});

p2.button.addEventListener("click", function () {
  playGame(p2, p1);
});

reset.addEventListener("click", resetGame);
