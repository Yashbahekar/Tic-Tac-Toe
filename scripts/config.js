function editPlayerConfig(event) {
 editedPlayer = +event.target.dataset.playerid; // +'1' => 1  as it would be a string there

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ''; // better do it using its id for future changes
  
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //   '  Yash  ' ==> 'Yash'  it removes all start and end white spaces
  // console.log(enteredPlayerName);

  if (!enteredPlayerName) {
    // enteredPlayerName === ''
    event.target.firstElementChild.classList.add("error"); ///// HERE WE ARE ADDING NEW CLASS TO THE REFERED ELEMENT THATS BECAUSE IF WE JUST DO firstElementChild.className = 'error' the as u can see the refered element can any any predefined class on it in this case we have predefined class thats why we are using .add("error") so byeeee....

    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

 const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
 updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  // if(editedPlayer === 1){
  //   players[0].name = enteredPlayerName;

  // }
  // else{
  //   players[1].name = enteredPlayerName;
  // }
///  instead of doing above thing we can direlty do it with shorter code by observing code like below

  players[editedPlayer - 1].name = enteredPlayerName;

  const winnerPlayer = document.getElementById('game-result');
  winnerPlayer.firstElementChild.children.textContent = players[0];

  closePlayerConfig();

}
