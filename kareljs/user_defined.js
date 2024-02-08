const {move, turnLeft, putBeeper, pickBeeper, start_karel} = require('./karel/karel')

function turnRight() {
    turnLeft()
    turnLeft()
    turnLeft()
}

function run() {
    turnRight()
    pickBeeper()
    move()
    pickBeeper()
}

