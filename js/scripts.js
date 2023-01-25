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

let hernan = new Player('hernan');
