// Business Logic

function Player(name) {
    this.name = name;
    this.score = 0;
    this.turnTotal = 0;
}

Player.prototype.randomNum = function() {
    return Math.floor((Math.random() *6) + 1)
}

Player.prototype.roll = function() {
    let diceValue = this.randomNum()
    if (diceValue === 1){
        this.turnTotal = 0;
        return "done";
    } else if ((parseInt(this.score) + parseInt(this.turnTotal) + parseInt(diceValue)) >= 10) {
        return this.name + " you won! Press reset to play again."
    } else {
        this.turnTotal += parseInt(diceValue);
        return "your turn total is: " + this.turnTotal + ". keep rolling or hold?";
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

// UI logic
function startHandler(event) {
    let player1 = new Player("player 1");
    let player2 = new Player("player 2");
    const instruction = document.querySelector('#instructions')
    instruction.innerText = "player1, please press roll to start";
}

window.addEventListener('load', function(event) {
    document.querySelector('#bnt-start').addEventListener('click',startHandler)
});