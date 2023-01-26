// Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turnTotal = 0;
  this.turn = false;

}

Player.prototype.randomNum = function() {
  return Math.floor((Math.random() *6) + 1)
}

Player.prototype.roll = function() {
  const goal = 100;
  let diceValue = this.randomNum()
  if (diceValue === 1){
      this.turn = false;
      this.turnTotal = 0;
      return 0;
  } else if ((parseInt(this.score) + parseInt(this.turnTotal) + parseInt(diceValue)) >= goal) {
      return goal;
  } else {
      this.turnTotal += parseInt(diceValue);
    console.log(this.turnTotal);
      return turnTotal;
  }
}

Player.prototype.hold = function() {
  this.score += this.turnTotal;
  this.turnTotal = 0;
}

Player.prototype.reset= function() {
  this.score= 0;
  this.turnTotal= 0;
}

function switchTurn(currentPlayer) {
  if (currentPlayer === player1) {
    return player2
  } else {
    return player1
  }
}

function print(result, player) {
  const p1Score = document.getElementById('scorePlayer1');
  const p2Score = document.getElementById('scorePlayer2');
  const instructions = document.getElementById('instructions');
  const turnTotal = document.querySelector('div#turnTotal');
  console.log(result);

  if (result === 0) {
    instructions.innerText = `round over ${player}. ${switchTurn(player)}'s turn.`;
  } else if (result === 100 && player === player1) {
    instructions.innerText = `you won ${player.name}!`;
    p1Score.innerText = result; 
  } else if (result === 100 && player === player2) {
    instructions.innerText = `you won ${player.name}!`;
    p2Score.innerText = result; 
  } else {
    instructions.innerText = `hold or roll ${player.name}?`;
    turnTotal.innerText = String(result); 
  }
}

// UI logic
function startPlayer(event) {
  let player1 = new Player("player 1");
  let player2 = new Player("player 2");
  const instruction = document.querySelector('#instructions');
  instruction.innerText = "player1, please press roll to start";
  // listen for roll button
  document.getElementById("bnt-roll-p1").addEventListener("click", (e) => {
    print(player1.roll(), player1);
  });
  document.getElementById("bnt-roll-p2").addEventListener("click", (e) => {
    print(player2.roll(), player2);
  });
}

window.addEventListener('load', function(event) {
  document.querySelector('#bnt-start').addEventListener('click',startPlayer);
});
