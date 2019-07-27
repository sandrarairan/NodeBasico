const cp = require('child_process');

function excmm(command){
   cp.exec(command, (err, stdout, sterr) => {
        if(err) throw err;
        if(stdout) console.log(`Out: \n${stdout}`);
        if(sterr) console.log(`sterr: \${sterr}`);
    })
}

//excmm("ls");
excmm("node ./src/script --base=7 --f=1e5");
