//módulos nativos

//console.log(require('path'));//require() sempre precisa receber um argumento, a função require() é utilizada para usar módulos dentro do node

const path = require('path')//path é um modulo nativo do nodejs

//console.log(path.basename("/Users/starter/docs.js"));

//meus módulos

const myModule = require('./exports')

console.log(myModule);