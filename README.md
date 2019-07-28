# NodeBasico
Curso Platzi
# TABLA DE CONTENIDO
- [Mac instalación](#Mac-instalación)
- [Clonación de repositorio del curso](#Clonación-de-repositorio-del-curso)
- [Introducción a Node.js CLI y REPL](#Introducción-a-Node.js-CLI-y-REPL)
- [Creación de proyectos de Node con NPM](#Creación-de-proyectos-de-Node-con-NPM)
- [Módulos en Node.js require() module.exports](#Módulos-en-Node.-js-require()-module.exports)
- [Fundamentos de asincronismo con Node.js](#Fundamentos-de-asincronismo-con-Node.js)
- [Callbacks y Promesas Casos de estudio](#Callbacks-y-Promesas-Casos-de-estudio)
- [Hacia el futuro asincronismo con Async/Await](#Hacia-el-futuro-asincronismo-con-Async/-Await)
- [Node FileSystem Lectura/Escritura de archivos en Node](#Node-FileSystem-Lectura/-Escritura-de-archivos-en-Node)
- [Node Readline Introducción de datos por terminal](#Node-Readline-Introducción-de-datos-por-terminal)
- [Node Child Process: Ejecución de subprocesos con Node](#Node-Child-Process-Ejecución-de-subprocesos-con-Node)
- [Node Debugger: Depuración de código en Node](#Node-Debugger-Depuración-de-código-en-Node)
- [Node Errors Manejo de errores en Node](#Node-Errors-Manejo-de-errores-en-Node)
- [Node Events Emisión y recepción de eventos en Node](#Node-Events-Emisión-y-recepción-de-eventos-en-Node)
- [Introducción al protocolo HTTP](#Introducción-al-protocolo-HTTP)
- [Creación de un servidor web básico con HTTP](#Creación-de-un-servidor-web-básico-con-HTTP)
- [Creación de un servidor web con Express](#Creación-de-un-servidor-web-con-Express)
- [Construcción de un API con Express.js](#Construcción-de-un-API-con-Express)
- [](#)
- [](#)
- [](#)

<!-- toc -->
## Mac instalación


## Clonación de repositorio del curso
https://github.com/platzi/nodejsbasico

git branch
Durante lecciones específicas del curso, se harán talleres tomando como base ramas definidas dentro de este repositorio. Para su facilidad, simplemente necesitara cambiar de rama al inicio de cada lección mediante el uso de Git:

git checkout [NOMBRE_RAMA] && npm install (Si se solicita por el facilitador)
git fetch

## Introducción a Node.js: CLI y REPL
En esta clase aprenderemos cómo usar la consola interactiva de Node dónde se puede ejecutar el código de JavaScript

vamos a ir a esta rama
- git checkout clase-node-repl-base
- man node (manual)
- node (entramos a la consola interactiva de node) 

## Creación de proyectos de Node.js con NPM
En esta clase aprenderemos cómo usar la consola interactiva de Node dónde se puede ejecutar el código de JavaScript
 npm init
 
 ## Módulos en Node.js require() module.exports
En esta clase aprenderás a exportar proyectos, cómo usar funciones e imprimir en consola.

- Vamos a la rama clase modulos locales base
https://github.com/platzi/nodejsbasico/tree/clase-modulos-locales-base
math.js
```
module.exports = {
    add: function(a,b) {
        return a + b;
    },
    substract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}
```
index.js
```
const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");
console.log(math.add(4,5));
console.log(math.divide(4,5));
console.log(math.multiply(4,5));
console.log(math.substract(4,5));

console.log(greet.greet("tata"));
console.log(hello.sayHello("carlos"));
```
## Manejando modulos externos con NPM y require()

https://github.com/platzi/nodejsbasico/tree/clase-modulos-externos-base

npm install
- index.js
```
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hola, soy Cowsay",
    e: "o0",
    T: "U"
}))
```
## Fundamentos de asincronismo con Node.js
Las funciones asíncronas son aquellas funciones que no son de acción bloqueante del hilo del proceso y permite la ejecución de otras instrucciones mientras fonaliza. Las implementaciones asincronas se utilizan para delegar tareas intensivas en ciclos de CPU.

https://github.com/platzi/nodejsbasico/tree/clase-intro-asincronismo-base

- additionn.js
```
module.exports = {
    // Versión síncrona
    //*****************
    syncSum: function(a, b) {
        console.log(a+b);
    },
    // Versión asíncrona
    //******************
    asyncSum: function(a, b) {
        setTimeout(()=>{
            console.log(a+b);
        }, 5000);
    }
}
``` 
-index.js
```
const add = require("./src/addition");
add.syncSum(1,2);
add.asyncSum(2,4);
```
se hace debug
- intensive.js
index.js
const add = require("./src/addition");
const sin = require("./src/intensive")
add.syncSum(1,2);
add.asyncSum(2,4);

sin.simulateAsync();

## Callbacks y Promesas Casos de estudio
En este caso de estudio veremos callbacks y promesas. Los callbacks son funciones que se pasan como argumentos y envían valores de retorno.

https://github.com/platzi/nodejsbasico/tree/clase-callback-promesas-base

- index.js
```
const call  = require("./src/call");
console.log(call.sync("sandra Rairan"))
```
- con callback
index.js
```const call  = require("./src/call");

call.withCallback("sandra Rairan",
    call.sync)
 
 - con promesas

 const call  = require("./src/call");

//call.withCallback("sandra Rairan", call.sync)
   
call.withPromise("Sandra rairan")
.then(name=>{console.log(name)})
 ```
 
 ## Hacia el futuro: asincronismo con Async/Await

Async / await en realidad está construido por encima de las promesas. No se puede utilizar con devoluciones de llamada simples o devoluciones de llamada de nodo.

https://github.com/platzi/nodejsbasico/tree/clase-async-await-base

- index.js
```
const call = require("./src/call")

//call.greet("Sandra Rairan")

call.withPromise("SANDRA","RAIRAN")
  .then(n=>console.log(n))
```
- tambien se puede escribir así:
const call = require("./src/call")

async function callWithPromise(){
   const fullName = await call.withPromise("SANDRA","RAIRAN")
   console.log(fullName)
}
callWithPromise()

## Node FileSystem Lectura/Escritura de archivos en Node
El módulo del sistema de archivos de Node.js le permite trabajar con el sistema de archivos en su computadora. Para incluir el módulo de Sistema de archivos, use el método require ()

https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_readfile_path_options_callback

- index.js
```
const fs = require("fs")
const aps = require("./src/fileops")

fs.readFile("./resources/number.txt", "Utf8",(err,text)=>{
    if(err) throw err;
    const numbers = text.split("\n").map(n=>Number(n));
    
    console.log(aps.incrementValues(numbers))
})
```
**Hasta aqui hemos leido el archivo**
- index.js
```
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
```
se crea el archivo numbernew

## Node.js Readline: Introducción de datos por terminal
El módulo Readline proporciona una forma de leer un flujo de datos, una línea a la vez.
En este enlace podrás ver la documentación: https://nodejs.org/dist/latest-v10.x/docs/api/readline.html

https://github.com/platzi/nodejsbasico/tree/clase-node-readline-base

- index.js
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const q = [
  
  'Cual es tu primer nombre ?  ',
  'Cual es tu primer apellido ? ',
  'Cual es tu edad ? '
];

/*esta funcuion permite usar la interfaz, para imprimir una pregunta en la consola
asi mismo, se queda esperando por la respuesta, cuando la obtiene la guardamos en resolve*/
const AskQuestion = (rl, question) => {

  return new Promise ((resolve, reject) => {
    rl.question(question, answer => {
      resolve(answer);
    })
  })
} 

/*Esta funcion recibe la interfaz,  una lista de preguntas, luego retornara una nueva promesa
esta usa async,  dentro de esa lista de preguntas vamos a iterar con un for
luego  usaremos await para llamar a  AskQuestion entonces,
no pasara a la siguiente promesa hasta que esta se resuelva si o si
finalmente ponemos  el resultado en results*/
const Ask = function (questions) {

  return new Promise (async resolve => {
    let results = [];

    for (let i = 0; i < questions.length; i++) {

      const result = await AskQuestion(rl, questions[i]);
      results.push(result);
    }

    rl.close();

    resolve(results);

  })
}

//puedes resolverlo con then 
Ask(q)
  .then(q => {
    console.log(`Hola ${q[0]}${q[1]}, tu edad es ${q[2]} `)
  })
```
- node index.js

## Node Child Process Ejecución de subprocesos con Node

El módulo child_process proporciona la capacidad de generar procesos secundarios de manera similar, pero no idéntica. Esta función la proporciona principalmente la función child_process.spawn ():

https://github.com/platzi/nodejsbasico/tree/clase-node-cp-base

index.js ().muetsra tablas de multiplicacion
npm install
- ```
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
```
```
## Node.js Debugger: Depuración de código en Node.js
En esta clase aprenderemos a usar el modo debugging.

https://github.com/platzi/nodejsbasico/tree/clase-node-debugger-base

- node inspect index.js
> next
>cont
- debugger; (en cualquier parte del codigo)
>restart
>cont 
>(se para en el debuger y se da repl para ver las variables)
>repl
>n
>.exit
- node inspect index.js
>cont
>watch("n")
>watch("n")
>next
>unwatch("i")   (para dejar de mirar expresiones)
>next
>.exit
- vscode debuger
## Node Errors: Manejo de errores en Node
Node.js admite varios mecanismos para propagar y manejar errores que se producen mientras se ejecuta una aplicación. La forma en que se reportan y manejan estos errores depende completamente del tipo de Error y el estilo de la API que se llama

https://github.com/platzi/nodejsbasico/tree/clase-node-errors-base

- index.js
```
const  errors = require("./src/errors")

try{
    errors.standardErr.range();
}catch(err){
    console.log("Ha ocurrido un error:", err)
}
```
- index.js
```
const  errors = require("./src/errors")

//try{
 //   errors.standardErr.range();
//}catch(err){
  //  console.log("Ha ocurrido un error:", //err)
//}
const handle = require("./src/handling")
handle.errorFirstCallbackWrong()
```
## Node Events Emisión y recepción de eventos en Node

Gran parte de la API central de Node.js se basa en una arquitectura asincrónica idiomática basada en eventos, en la que ciertos tipos de objetos (llamados “emisores”) emiten eventos con nombre que hacen que se llame a los objetos de función (“listeners”).

https://nodejs.org/docs/latest-v8.x/api/events.html

https://github.com/platzi/nodejsbasico/tree/clase-node-events-base

- index.js
```
const greet = require("./src/greet")

 greet.emit("clap") //Hacer llamado al evento sin argumento
 greet.emit("greet", "CC") //Hacer llamado al evento, con un argumento

 greet.emit("call", "sandra rairan" ,name=> { //Llamado a evento con función Callback
     console.log(`Hi! ${name}`)
 })
 ```
 
## Introducción al protocolo HTTP
**SERVCIOS WEB NO CON EXPRESS**
Las interfaces HTTP en Node.js están diseñadas para admitir muchas características del protocolo que tradicionalmente han sido difíciles de usar. En particular, mensajes grandes, posiblemente codificados, trozos. La interfaz tiene cuidado de no amortiguar nunca solicitudes o respuestas completas, ya que el usuario puede transmitir datos.

## Creación de un servidor web básico con HTTP
Si una conexión de cliente emite un evento de ‘error’, se reenviará aquí. El "listener"de este evento es responsable de cerrar / destruir el socket subyacente. Por ejemplo, uno puede desear cerrar con más gracia el socket con una respuesta HTTP personalizada en lugar de cortar bruscamente la conexión.

https://www.w3schools.com/nodejs/nodejs_npm.asp

https://github.com/platzi/nodejsbasico/tree/clase-servidor-http-base

- index.js
```
const http = require("http");
const fs = require("fs");
const port = 3000;
const route = "./resources/my_page.html";


const server = http.createServer((req, res ) => {

	fs.readFile(route, (err, data ) => {
		if(err) { console.error(err); return;}

		res.end(data);
	})
})

console.log(`Iniciando el servidor en el puerto ${port}`); 	
server.listen(port)
```
- node .
-localhost:3000

## Creación de un servidor web con Express.js

Express es un marco de aplicación web Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para aplicaciones web y móviles.

https://www.w3schools.com/nodejs/nodejs_npm.asp

http://expressjs.com/

https://github.com/platzi/nodejsbasico/tree/clase-servidor-express-2-base

https://github.com/platzi/nodejsbasico/tree/clase-servidor-express-base

- index.js
```
const express = require("express")
const app = express();
const fs =require("fs")
 
app.get("/app",(req,res)=>{
    res.end("Estoy en la ruta /app")
  })

app.get("/",(req,res)=>{
    res.send("Estoy en Home")
  })



app.get("*",(req,res)=>{
  res.send("No se donde estoy")
})

app.listen(3000,()=>{
    console.log("El servidor express está escuchando en el puerto 3000")
  })
``` 
- npm run start () se saca de package.json
## Construcción de un API con Express.js

En esta sesión se presentarán las directivas generales para consumir un API desde una aplicación de Node.js. Se presentarán las directivas generales de configuración para escribir código de consumo de un API.
https://github.com/platzi/nodejsbasico/tree/clase-servidor-express-2-base

- npm run server
- http://localhost:3000/api/users
- otra alternativa: curl http://localhost:3000/route
