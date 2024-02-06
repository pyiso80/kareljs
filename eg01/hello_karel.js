const {move, turnLeft, putBeeper, pickBeeper, run} = require('./karel/karel')

function run () {
    move()
    move()
    turnLeft()
    putBeeper()
    pickBeeper()
}

function turnRight() {
    turnLeft()
    turnLeft()
    turnLeft()
}