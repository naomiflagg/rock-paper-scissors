			// Game variables
		let playerScore = 0;
		let computerScore = 0;
		let gameOver = false;

		// DOM variables
		const gameButtons = document.querySelectorAll(".game-button");
		const resultsContainer = document.querySelector("#results-container");
		const pScore = document.createElement("h1");
		const cScore = document.createElement("h1");
		const gameOverText = document.createElement("h1");
		
		// Runs the single round when user clicks on their hand option.
		gameButtons.forEach(function(clickedButton) {
			clickedButton.addEventListener("click", playRound);
		});
				
			// Computer's play: returns random selection from rock, paper or scissors.
		function getComputerChoice() {
			const handOptions = ["Rock", "Paper", "Scissors"];
			return handOptions[Math.floor(Math.random() * handOptions.length)];
		}
		
		// Single round play of Rock Paper Scissors.
		function playRound(playerSelection, computerSelection) {
			// Extracts player's selection from button clicked.
			if (gameOver) return;
			playerSelection = this.id;
			computerSelection = getComputerChoice();
			if (playerSelection === computerSelection) {
				alert("Tie.");
			}
			else if (((playerSelection === "Rock") && (computerSelection === "Scissors"))
				|| ((playerSelection === "Scissors") && (computerSelection === "Paper"))
				|| ((playerSelection === "Paper") && (computerSelection === "Rock"))) {
					alert(`You win! ${playerSelection} beats ${computerSelection}.`);
					playerScore++;
			}
			else {
				alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
				computerScore++;
			}
			displayResults(playerScore, computerScore);
			// End game when one player reaches 5 points.
			if (playerScore === 5 || computerScore === 5) {
				endGame(playerScore, computerScore);
			}		
		}
		
		// Display running results of single rounds.
		function displayResults(playerScore, computerScore) {
			pScore.textContent = `Your score: ${playerScore}`;
			cScore.textContent = `Computer's score: ${computerScore}`;
			resultsContainer.appendChild(pScore);
			resultsContainer.appendChild(cScore);	
			}
		

		// End of game display.
		function endGame(playerScore, computerScore) {
		  if (playerScore === 5) {
				gameOverText.textContent = "Game over. You win!";
			}
			else {
				gameOverText.textContent = "Game over. Computer wins!";
			}
			resultsContainer.appendChild(gameOverText);
			gameOver = true;
		}