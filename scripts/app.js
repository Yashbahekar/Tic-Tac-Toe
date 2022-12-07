let editedPlayer = 0;
let activePlayer = 0;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let currentRound =1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById('game-result');



// const gameFieldElements = document.querySelectorAll("#khel-ka-maidan li");
const gameBoardElement = document.getElementById("khel-ka-maidan");

const cancelBtnConfig = document.getElementById("cancel-config-btn");

let player1btn = document.getElementById("edit-player-1btn");
let player2btn = document.getElementById("edit-player-2btn");

player1btn.addEventListener("click", editPlayerConfig);

player2btn.addEventListener("click", editPlayerConfig);

cancelBtnConfig.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField); // the problem ais that if we click on any gaps betweem li then the game board willl be replaced with X/O to avoid see updated function
