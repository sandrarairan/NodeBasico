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
