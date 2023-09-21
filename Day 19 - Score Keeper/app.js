const playto = document.querySelector("#playto");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

let winCondition = 3;

function resetGame() {
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  p1Display.textContent = 0
  p2Display.textContent = 0
};

playto.addEventListener("input", function (e) {
  winCondition = this.value;
  console.log(winCondition);
  console.log(typeof winCondition);
  p1Display.textContent = 0
  p2Display.textContent = 0
});

p1Button.addEventListener("click", function () {
  const p1score = parseInt(p1Display.textContent) + 1;
  p1Display.textContent = p1score;
  console.log(winCondition);
  if (p1score === parseInt(winCondition)) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    p1Display.style.color = "green";
    p2Display.style.color = "red";
  }
});

p2Button.addEventListener("click", function () {
  const p2score = parseInt(p2Display.textContent) + 1;
  p2Display.textContent = p2score;
  if (p2score === parseInt(winCondition)) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    p2Display.style.color = "green";
    p1Display.style.color = "red";
  }
});

reset.addEventListener("click", resetGame);