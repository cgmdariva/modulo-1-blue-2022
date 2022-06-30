const prompt = require("prompt-sync")();

// Ler um número e informar se é par ou ímpar
// i = prompt("Digite um número para saber se é par ou ímpar:")

// if (i % 2 !== 0){
//     console.log("esse número é ímpar");
// } else {
//     console.log("par")
// }


//Programa que leia 2 valores inteiros, indicar se os valores são multiplos entre si.

valor1 = prompt("Digite um número:");
valor2 = prompt("Digite outro número:");

if (valor1 % valor2 == 0) {
    console.log("São múltiplos");
} else {
    console.log("não são múltiplos");
};