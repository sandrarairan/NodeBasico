# NodeBasico
Curso Platzi
# TABLA DE CONTENIDO
- [Mac instalación](#Mac-instalación)
- [Clonación de repositorio del curso](#Clonación-de-repositorio-del-curso)
- [Introducción a Node.js CLI y REPL](#Introducción-a-Node.js-CLI-y-REPL)
- [Creación de proyectos de Node con NPM](#Creación-de-proyectos-de-Node-con-NPM)
- [Módulos en Node.js require() module.exports](#Módulos-en-Node.-js-require()-module.exports)
- [](#)
- [](#)
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
## 
