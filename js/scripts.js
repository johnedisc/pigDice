// Business Logic

function Player(name) {
    this.name = name;
    this.score = 0;
    this.turnTotal = 0;
}

function randomNum() {
    return Math.floor((Math.random() *6) + 1)
}

function roll(obj) {
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

function hold() {
    this.score += this.turnTotal;
    this.turnTotal = 0;
}

function reset() {
    this.score= 0;
    this.turnTotal= 0;
}

let player1 = new Player("player 1");
let player2 = new Player("player 2");


// UI logic
function startGame(event) {
    const instruction = document.querySelector('#instructions')
    instruction.innerText = "player1, please press roll to start";
    player1.roll = roll;
    console.log(player1)
    

}

window.addEventListener('load', function(event) {
    document.querySelector('#bnt-start').addEventListener('click',startGame);
});