"use strict";

let answer = Math.floor(Math.random() * 20) + 1;

function displayMessage(message) {
	return (document.querySelector(".message").textContent = message);
}

document.querySelector(".check").addEventListener("click", function () {
	const val = document.querySelector(".guess").value;
	let score = document.querySelector(".score").textContent;

	function compare() {
		if (val > answer) displayMessage("Too High");
		else displayMessage("Too Low");
		score -= 1;
		document.querySelector(".score").textContent = score;
	}

	function correctAnswer() {
		displayMessage("Correct Answer");
		document.body.style.backgroundColor = "#60b347";
		const hs = document.querySelector(".highscore").textContent;
		if (score >= hs) document.querySelector(".highscore").textContent = score;
		document.querySelector(".number").textContent = val;
	}

	if (!val) {
		displayMessage("Enter a Number");
		return;
	}

	if (val >= 1 && val <= 20) {
		if (score == 0) {
			displayMessage("You Lost");
			document.body.style.backgroundColor = "#FFAFCC";
			let button = document.querySelector(".check");
			button.disabled = true;
			return;
		}

		if (val == answer) {
			correctAnswer();
			return;
		} else compare();
	} else {
		displayMessage("Enter a Number within the Range");
		return;
	}
});

document.querySelector(".again").addEventListener("click", function () {
	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = 20;
	document.body.style.backgroundColor = "#222";
	answer = Math.floor(Math.random() * 20) + 1;
});
