const fs = require("fs")
const aps = require("./src/fileops")
let incValue;
fs.readFile("./resources/number.txt", "Utf8",(err,text)=>{
    if(err) throw err;
    const numbers = text.split("\n").map(n=>Number(n));
    
    incValue=aps.incrementValues(numbers)
    fs.writeFile("./resources/numbernew.txt", incValue.join("\n"), (err,result)=>{
        if(err) throw err;
});
})
