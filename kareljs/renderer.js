const {move, turnLeft, putBeeper, pickBeeper, run} = require('./karel/karel')

const btn = document.querySelector('.alert')
btn.addEventListener('click', () => {run()})

