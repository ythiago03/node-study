/* Crie 2 arquivos JavaScript.
* O primeiro, irá exportar uma função chamada getFlag()
* que recebera um argumento do tipo String.
* Essa função deverá buscar dentro do array process.argv a flag desejada, que é a string 
* e retornar o valor da flag
*
* O segundo irá importar a função e passar a flag desejada.
*
* Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
* para que seja impresso no terminal a saudação e o nome da pessoa. */

const flag = require('./exportFlag')

console.log(`Oi ${flag('--name')}, ${flag('--greeting')}`);



