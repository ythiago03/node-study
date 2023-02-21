const questions = [
    'Qual o seu nome?',
    'Qual o seu gênero? (Masculino,Feminino)',
    'Qual a sua idade?',
]

const ask = (index = 0) => {
    process.stdout.write('\n\n' + questions[index] + ' >')//bem parecido con o console.log
}

ask()

const answers = []

const quizResponse = () => {
    let genero = 'um homem'
    if(answers[1].toLowerCase() == 'feminino'){
        genero = 'uma mulher'
    }

    let message = `
    Olá, ${answers[0]}. Tudo bem?

    Descobri aqui que você é ${genero} e que tem ${answers[2]} anos!`

    return message
}

process.stdin.on("data", data => {//process.on fica "escutando" o event passado no primeiro parâmetro e quanto ocorre esse evento ele chama a função de callback, um pouco parecido com o addEventListener()
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(quizResponse());
        process.exit()
    }
})

process.on('exit', () => {
    console.log('\nObrigado por participar do Quiz! 💜');
})