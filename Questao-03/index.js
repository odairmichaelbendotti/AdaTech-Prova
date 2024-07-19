function verificar(nome, nota){
    if (typeof nota === 'number'){
        if ( nota >= 8){
            console.log(`Parabéns ${nome}, você foi aprovado.`)
        } else {
            console.log(`Olá ${nome}! Infelizmente você foi reprovado.`)
        }
    } else {
        console.log('Você não informou um número válido para a nota.')
    }
}

verificar('Odair', 10)