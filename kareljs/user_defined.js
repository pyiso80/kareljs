const {move, turnLeft, putBeeper, pickBeeper, start_karel} = require('../kareljs/karel/karel')

function turnRight() {
    turnLeft()
    turnLeft()
    turnLeft()
}

function run() {
    turnLeft()
}

