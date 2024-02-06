const move = () => {
    alert("Karel moves one step forward!")
};

const turnLeft = () => {
    alert("Kare turns left!")
};

const pickBeeper = () => {
    alert("Karel picks a beeper!")
};

const putBeeper = () => {
    alert("Karel puts a beeper!")
};

const run = () => {
    alert("This is default run method!" + __dirname)
    console.log("Done!")
}
    
module.exports =  {move, turnLeft, putBeeper, pickBeeper, run};
