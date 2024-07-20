let numerosBingo = [11, 28, 35, 74, 26, 17];
let cartelaSorteados = [];

function sortearNumero() {
    //Usei o ceil para arredondar somente para cima. Se o numero fosse abaixo de 0.4, seria arredondado para 0, o que não pode.
    return Math.ceil(Math.random() * 75);
}

function numeroNaCartela(numero) {
    for (let i = 0; i < numerosBingo.length; i++) {
        if (numerosBingo[i] === numero) {
            return true;
        }
    }
    return false;
}

function numeroJaSorteado(numero) {
    for (let i = 0; i < cartelaSorteados.length; i++) {
        if (cartelaSorteados[i] === numero) {
            return true;
        }
    }
    return false;
}

while (cartelaSorteados.length < numerosBingo.length) {
    let numeroAleatorio = sortearNumero();
    console.log("Número aleatório: " + numeroAleatorio);
    if (numeroNaCartela(numeroAleatorio) === true && numeroJaSorteado(numeroAleatorio) === false) {
        cartelaSorteados.push(numeroAleatorio);
        console.log("Número sorteado: " + numeroAleatorio);
        console.log("Números já sorteados: " + cartelaSorteados);
    }
}

console.log("Parabéns, você ganhou!");
