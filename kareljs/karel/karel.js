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

const { exec,spawn } = require("child_process");
const fs  = require("fs");
var path = require('path');

const start_karel = (file_name) => {
    console.log(__dirname)
    console.log("The .js file executed: " + file_name)
    var user_script;
    fs.readFile(file_name, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        var user_defined = path.join(__dirname, '..', 'user_defined.js');
        var user_script = data.replace(/\.\.\/kareljs\/karel\/karel/g, './karel/karel')
                            .replace(/start_karel\(__filename\)/g, "")
        fs.writeFile(user_defined, user_script, 'utf-8', function (err) {
            console.log(err);
        });
    });
    var index_html = path.join(__dirname, '..', 'index.html');
    
    /*
    fs.readFile(index_html, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("about to replace...")
        console.log(data);
        var replaced = data.replace(/default/g, 'user')

        console.log("replaced " + replaced)

        fs.writeFile(index_html, replaced, 'utf-8', function (err) {
            console.log(err);
        });
        console.log("done replace...")

      });
    */
    
    exec("cd ../kareljs && ./node_modules/.bin/electron main.js " + file_name, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
    /*
    spawn("cd ../kareljs && ./node_modules/.bin/electron main.js " + file_name, {
        stdio: 'inherit',
        shell: true
    })
    */


}

module.exports =  {move, turnLeft, putBeeper, pickBeeper, start_karel};
