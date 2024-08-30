const prompt = require('prompt-sync')();

let nivelFerro = "Ferro"
let nivelBronze = "Bronze"
let nivelPrata = "Prata"
let nivelOuro = "Ouro"
let nivelDiamante = "Diamante"
let nivelLendario = "Lendário"
let nivelImortal = "Imortal"



function lerPartidas() {
    let vitorias = prompt('Digite a quantidade de vitórias: ')
    let derrotas = prompt('Digite a quantidade de derrotas: ')

    quantidadeDeVitorias = vitorias - derrotas
    return quantidadeDeVitorias
}

saldoVitorias = lerPartidas();

if(saldoVitorias<= 10) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelFerro}`);
    
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelBronze}`);
} else if(saldoVitorias > 20 && saldoVitorias <= 50) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelPrata}`);
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelOuro}`);
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelDiamante}`);
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelLendario}`);
} else {
    console.log(`O Herói tem saldo de ${saldoVitorias}pts e está no nível de ${nivelImortal}`);
}
    
    



