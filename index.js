const call  = require("./src/call");

//call.withCallback("sandra Rairan", call.sync)
   
call.withPromise("Sandra rairan")
.then(name=>{console.log(name)})

