const call = require("./src/call")

//call.greet("Sandra Rairan")
async function callWithPromise(){
   const fullName = await call.withPromise("SANDRA","RAIRAN")
   console.log(fullName)
}
callWithPromise()