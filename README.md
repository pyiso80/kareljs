# Welcome to Karel Junior!

**karel-jr** is yet another version of Karel the Robot. It's implemented in JavaScript and also use JavaScript to write Karel programs. It is similar to Stanford's Karel version for Python and Java. Those versions just use Python or Java to program Karel, and do not use a special language. For Python version, please see [here](https://pypi.org/project/stanfordkarel/).

Reasons I want to implement my own version are
 - Allow me to use any code editor or IDE I like
 - Running Karel program should be the same as running normal Java/Python program. For my case, running JavaScript program with Node.js.
 - Transitioning from Karel to JavaScript should not require a completely new environment, just use existing installation of Node.js, code editor, etc. 

## Current Status
Date: 08-02-2024

I have only implemented the skeleton code which allow me run Karel program with a simple command
`node hello_karel.js`
This will start the Karel app (Electron App Window) and when the button is clicked, the `run` function, the entry point,   in `hello_karel.js` will be called, and Karel will start doing as it is programmed. Only the dummy Karel commands, no graphics yet. That will be the next stage, where I will have to implement the model, to represent Karel and the world he is in, and also the view the reflects Karel's current state on the screen.