const {move, turnLeft, putBeeper, pickBeeper, run} = require('./karel/karel')

const btn = document.querySelector('.run')
btn.addEventListener('click', () => {run()})

