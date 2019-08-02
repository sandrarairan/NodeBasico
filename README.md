<<<<<<< HEAD
# Curso básico de Node.js

Este repositorio ha sido confeccionado para proveer de material apropiado al participante del curso durante el desarrollo del mismo.

## Empezando

Para hacer uso del mismo, proceda a clonar el repositorio en su equipo local mediante el apropiado comando:

```
git clone https://github.com/platzi/nodejsbasico.git
```

## Uso

Durante lecciones específicas del curso, se harán talleres tomando como base ramas definidas dentro de este repositorio. Para su facilidad, simplemente necesitara cambiar de rama al inicio de cada lección mediante el uso de Git:

```
git checkout [NOMBRE_RAMA] && npm install (Si se solicita por el facilitador)
```

Con esto hecho, su lección estará lista para ser desarrollada junto al programa.

## Autor

* **Platzi**

## Licencia

* **Licencia MIT**
=======
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
- [MongoDB Conexión y escritura de datos con Node](#MongoDB-Conexión-y-escritura-de-datos-con-Node)
- [Completando nuestro API con MongoDB](#Completando-nuestro-API-con-MongoDB)
- [Bienvenido a la sección del Proyecto del Curso](#Bienvenido-a-la-sección-del-Proyecto-del-Curso)
- [Introducción a Socket.io y proyecto de curso](#Introducción-a-Socket.io-y-proyecto-de-curso)
- [](#)
- [](#)
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

## MongoDB: Conexión y escritura de datos con Node.js
MongoDB ofrece la base de datos líder en el mundo para aplicaciones modernas como un servicio en la nube. Es totalmente automatizada, diseñada y ejecutada por el mismo equipo que construye la base de datos.

https://github.com/platzi/nodejsbasico/tree/clase-servidor-express-3-base

https://docs.mongodb.com/manual/installation/

- npm install
- instalacion mngodb:
1- Ingresa a https://www.mongodb.com/download-center/community y descarga el community server con la versión de tu sistema operativo.

MongoDB
2- Da doble clic sobre el archivo .tgz si tu sistema es Mac para descomprimir el archivo descargado.

3- Copia la carpeta descargada en tu directorio Home o donde quieras dejar todos los ejecutables de Mongo.

4- Actualizar tu PATH con la ruta a la carpeta donde dejaste los archivos descomprimidos:
a- Abre un terminal y corre sudo nano /etc/paths ve a la última línea del archivo y agrega toda la ruta a la carpeta /bin que movimos en el paso 
anterior.
b- Presiona ctrl+x para salir e ingresa Y para guardar los cambios que acabas de hacer.
c- Si ejecutas echo $PATH deberías tener la ruta que apunta a la carpeta /bin con los ejecutables de MongoDB.

5- Para ejecutar MongoDB de forma local debes abrir una terminal y escribir mongod, mongod lo que hace es inicializar un servidor local de MongoDB en el puerto 27017. Si presionas ctrl+c o cierras la terminal el servidor local se dentendrá.

6- Luego en una terminal aparte escribes mongo y das enter, mongo es la consola de MongoDB con la cual estaremos trabajando durante el curso. Si solamente escribimos mongo la consola esta se va a tratar de conectar al servidor local de MongoDB por el puerto 27017 que levantamos en el paso anterior con mongod si mongod no se está ejecutando saldrá un error de conexión.

7- Durante el curso estaremos trabajando con MongoDB Atlas, para conectarnos desde la consola lo que debemos hacer es ejecutar mongo <MONGODB_ATLAS_URI> --user USUARIO_CREADO y luego el te pedirá el password.

8- Si escribes show dbs te deberán salir las bases de datos que se encuentran en el cluster.

**En Mac se me hizo mas sencillo con homebrew.**
Primero instalamos homebrew, es recomendable tener actualizado Xcode, abrimos una terminal y escribimos lo siguiente:

/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
Cuando termine, cerramos y abrimos otra terminal, para escribir los comando de instalación de mongodb:

brew update

brew install mongodb

sudo mkdir -p /data/db

sudo chown -R id -un /data/db

Para registrarlo como servicio, ingresamos estos ultimos comandos:

brew tap homebrew/services

brew services start mongodb

Y listo, ahora en la terminal solo teclea “mongo” para empezar a usar el servicio.

sudo mkdir -p /data/db
sudo chown -R $(whoami):admin /data
listo, finalmente podemos ejecutar mongod en una pestaña y conectarnos en otra con el comando mongo

- se abre una terminal: mongo
- en la otra npm run fill-db
- luego donde esta mogo
> show databases
>use platzi
>show collections
>db.users.find({}).count()

## Completando nuestro API con MongoDB
En esta sesión terminaremos de completar nuestra API con Express, Node.js y MongoDB
https://github.com/platzi/nodejsbasico/tree/clase-servidor-express-4-base

- index.js de db
```
const mongo = require("./connect");
const { DB_NAME } = require("./config")

module.exports = {
    getUsers: function() {
        const db = mongo.instance.db(DB_NAME)
        const users = db.collection("users").find({}).toArrary()
        return users;
    },
    getUserById: function(id) {
        return users.filter(user=>user._id===id);
    },
    getUserByAgeRange: function(lower = 0, higher = 99) {
        return users.filter(user=>user.age >= lower && user.age <= higher);
    }
}

```
- npm run start (levanta el express)
- index de db
```
const mongo = require('./connect')
const { DB_NAME } = require('./config')

/**
 * Retorna la collecion de Users
 * 
 * @param {object} filter Paramátros para filtar los datos
 */
const getUserCollection = (filter = {}) => {
    const db = mongo.instance().db(DB_NAME)
    return db.collection('users').find(filter).toArray()
}

module.exports = {
    getUsers: function () {
        return getUserCollection({});
    },
    getUserById: function (id) {
        return getUserCollection({
            _id: id
        })
    },
    getUserByAgeRange: function (lower = 0, higher = 99) {
        return getUserCollection({
            age: {
                $gte: Number(lower),
                $lte: Number(higher)
            }
        })
    }
}
```
- En el archivo routes/api.js poner async - await a la promesa retornada por ruta user/:id como se muestra en el codigo:

app.get(`${API_BASE}/user/:id`, async (req, res) => {
    constquery = await db.getUserById(req.params.id);
    res.json(query);
});

## Bienvenido a la sección del Proyecto del Curso

Si has llegado hasta aquí, estás listo para crear tu primer proyecto con NodeJs: Un juego interactivo de “Tres en raya”.

Recuerda que en ésta liga puedes acceder al repositorio del curso --> https://github.com/platzi/nodejsbasico

## Introducción a Socket.io y proyecto de curso
WebSocket es un protocolo de comunicacion que proporciona canales de comunicación dúplex completos a través de una única conexión TCP.

Socket.IO permite la comunicación en tiempo real, bidireccional y basada en eventos.

https://github.com/platzi/nodejsbasico/tree/clase-proyecto-socket-base

https://socket.io/


Funciona en todas las plataformas, navegadores o dispositivos, centrándose igualmente en la confiabilidad y la velocidad.
index.js 
```
const server = require('http').Server();
const io = require('socket.io')(server);
const port = require('./config').SERVER_PORT;

const banner = `
***********************
  Basic Node.js Course
    Course Project
  Tic Tac Toe Server
***********************
Status: Online
Listening: on port: ${port}
`;

io.on('connection', (socket) => {
  socket.on('register', user => {
    console.info(`User registed: ${user.name}`)
  })
})

server.listen(port, () => {
  console.info(banner);
});

- corremos fronted
 npm run start-frontend

- corremos el backend
 npm run start-backend

 
- en el cliente react seleccionamos network y el usuario
```
**Bases y fundamentos del proyecto final: Tic-tac-toe**

https://github.com/platzi/nodejsbasico/tree/clase-proyecto-socket-2-base

- corremos fronted
 npm run start-frontend

- corremos el backend
 npm run start-backend
 
 https://github.com/platzi/nodejsbasico/tree/clase-proyecto-socket-final
>>>>>>> 12567d1a9882f7e474f0ea99fb72db312c1074a8
