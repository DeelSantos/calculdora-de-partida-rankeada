const prompt = require('prompt-sync')();




function lerPartidas() {
    let vitorias = prompt('Digite a quantidade de vitórias: ')
    let derrotas = prompt('Digite a quantidade de derrotas: ')

    quantidadeDeVitorias = vitorias - derrotas
    return quantidadeDeVitorias
}

lerPartidas = lerPartidas();

if(lerPartidas > 10) {
    console.log("Eu sou a Juliana");
    
} else {
    console.log("Eu sou o coquinho camalada");
    
}


