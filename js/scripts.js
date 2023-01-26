// Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turnTotal = 0;
  this.diceValue = 0;
  this.goal = 10;
}

Player.prototype.randomNum = function() {
  return Math.floor((Math.random() *6) + 1)
}

Player.prototype.roll = function() {
  this.diceValue = this.randomNum()

  if (this.diceValue === 1){
      console.log(this.turnTotal, 0)
      this.turnTotal = 0;
      return 0;
  } else if ((parseInt(this.score) + parseInt(this.turnTotal) + parseInt(this.diceValue)) >= 10) {
    // this.turnTotal = 10
      let winner = parseInt(this.score + this.turnTotal + this.diceValue);
      console.log(typeof winner);
      return winner;
  } else {
      this.turnTotal += parseInt(this.diceValue);
    console.log(this.turnTotal);
      return this.turnTotal;
  }
}

Player.prototype.hold = function() {
  this.score += this.turnTotal;
  this.turnTotal = 0;
}


function switchTurn(currentPlayer) {
  if (currentPlayer === 'player 1') {
    return 'player 2'
  } else {
    return 'player 1'
  }
}

function print(result, player) {
  const p1Score = document.getElementById('scorePlayer1');
  const p2Score = document.getElementById('scorePlayer2');
  const instructions = document.getElementById('instructions');
  const turnTotal = document.getElementById('turnTotal');
  const diceRoll = document.getElementById("dice-roll")
  diceRoll.innerText = player.diceValue;

  if (result === 0) {
    instructions.innerText = `round over ${player.name}. ${switchTurn(player.name)}'s turn.`;
    return 0;
  } else if (result >= 10 && player.name == 'player 1') {
    instructions.innerText = `you won ${player.name}!`;
    p1Score.innerText = result; 
    return 10;
  } else if (result >= player.goal && player.name == 'player 2') {
    instructions.innerText = `you won ${player.name}!`;
    p2Score.innerText = result; 
    return player.goal;
  } else {
    instructions.innerText = `hold or roll ${player.name}?`;
    turnTotal.innerText = "Turn total: " + result; 
    
  }
}

function printScore(object, turn) {
  if(turn == "p1") {
    document.getElementById("scorePlayer1").innerText = object.score
  } else {
    document.getElementById("scorePlayer2").innerText = object.score
  }
}

// UI logic
function startPlayer(event) {

  let player1 = new Player("player 1");
  let player2 = new Player("player 2");
  const instruction = document.querySelector('#instructions');
  instruction.innerText = "player1, please press roll to start";
  let turn = 'p1';
  document.getElementById("scorePlayer1").innerText = player1.score
  document.getElementById("scorePlayer2").innerText = player2.score
  document.getElementById('turnTotal').innerText = 0;
  document.getElementById("dice-roll").innerText = 0;
  // listen for roll button

  document.getElementById("bnt-roll-p1").addEventListener("click", (e) => {
    player1.diceValue = 0;
    player2.diceValue = 0;
    if (turn !== 'p1') {
      return 'no'
    } else {
      let result = print(player1.roll(), player1);
      if (result === 0) {
        turn = 'p2';
      }
    }

  });
  document.getElementById("bnt-roll-p2").addEventListener("click", (e) => {
    player1.diceValue = 0;
    player2.diceValue = 0;
    if (turn !== 'p2') {
      return 'no'
    } else {
      let result = print(player2.roll(), player2);
      if (result === 0) {
        turn = 'p1';
      }
    }
  });

  document.getElementById("bnt-hold-p1").addEventListener("click", (e) => {
    if (turn != 'p1') {
      return 'no'
    } else {
      player1.hold()
      printScore(player1, turn)
      turn = 'p2';
    }
  })

  document.getElementById("bnt-hold-p2").addEventListener("click", (e) => {
    if (turn != 'p2') {
      return 'no'
    } else {
      player2.hold()
      printScore(player2, turn)
      turn = 'p1';
    }
  })
}

window.addEventListener('load', function(event) {
  document.querySelector('#bnt-start').addEventListener('click',startPlayer);
});
