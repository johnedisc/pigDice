function Player(name) {
    this.name = name;
    this.score = 0;
    this.turnTotal = 0;
}

Player.prototype.rollCounter = function() {
    return Math.floor((Math.random() *6) + 1)
}

Player.prototype.turn = function() {
    let diceValue = this.rollCounter()
    if (diceValue === 1){
        this.turnTotal = 0;
        return "done";
    } else {
        this.turnTotal += diceValue
        return "your turn total is: " + this.turnTotal + ". keep rolling or hold?";
    }
}

let hernan = new Player('hernan');
