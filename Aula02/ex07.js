const prompt = require("prompt-sync")();

// 7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. 
// Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável 
// pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).

let valorConta = 42.54;
let taxaGarcom = 0.1;
let valorGarcom = Number((valorConta * taxaGarcom).toFixed(2));

let valorTotal = valorConta + valorGarcom;

console.log(valorTotal);