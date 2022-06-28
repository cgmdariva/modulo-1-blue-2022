console.clear();
const prompt = require("prompt-sync")();

// let nome = "Caio";
// let turma = "C020";
// let alunos = 27;

// console.log("Hello World!");
// console.log(nome, turma);
// console.log(`Meu nome é ${nome}, estou na turma ${turma} com ${alunos} alunos`);

// console.log(typeof nome);
// console.log(typeof alunos);

// console.log("Digite o nome:");
// nome = prompt();

// console.log(`Olá ${nome}`);

// var1 = +prompt("Digite um número: ");
// var2 = +prompt("Digite outro número: ");

// console.log("O número somado com ele mesmo é:", var1 + var1);
// console.log(`O número multiplicado por ele mesmo é ${var1*var1}`);
// console.log(`O resto da divisão dos dois números é ${var1%var2}`);
// console.log(`O número ${var1} elevado a ${var2} é ${var1**var2}`);

// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. 
// Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e 
// todo mês com 30 dias.
// anos = +prompt("Quantos anos você tem?");
// meses = +prompt(`Você tem ${anos} anos e quantos meses?`);
// dias = +prompt(`Você tem ${anos} anos e ${meses} meses e quantos dias?`);
// console.log(`Você viveu ${(anos*365) + (meses*30) + (dias)} `);

//Faça o cálculo contrário: leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
//Também considere todo ano com 365 dias e todo mês com 30 dias.

totaldias = +prompt("Quantos dias de vida você tem?");

anos = parseInt(totaldias / 365);
meses = parseInt((totaldias % 365) / 30);
dias = (totaldias - (anos * 365) - (meses * 30));

console.log(`Então você tem ${anos} anos, ${meses} meses e ${dias} dias.`);