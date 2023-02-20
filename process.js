console.log(process.argv);
//quando rodados o arquivo passando algo depois, ele cai dentro do process argv, que é um array, então se rodamos "node process.js Thiago Fidêncio" o que está na posição 2 é o "Thiago" e na posição 3 o "Fidêncio"

const firstName = process.argv[2]
const surname = process.argv[3]

console.log('Seu nome é', firstName + ' ' + surname);