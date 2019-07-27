const add = require("./src/addition");
const sin = require("./src/intensive")
add.syncSum(1,2);
add.asyncSum(2,4);

sin.simulateAsync();