const prompt = require("prompt-sync")();

console.log("A história começou há muito tempo. Ao norte de White Hills, nosso herói escuta uma voz no vento pedindo socorro. A voz diz:");

console.log('"Estou perto de você, na caverna com duas cachoeiras ao lado da entrada."');

console.log("Nosso herói imediatamente vai para a caverna e entra.");

answer1 = prompt("Nosso herói entra na caverna com sua espada nas mãos? Sim ou não?");
// No
console.log("Nosso herói entra desarmado e um Goblin usa seu ataque de velocidade para acertá-lo. Mas rapidamente o contra-ataque mata o Goblin.");
// Yes
console.log("Nosso herói entra armado na caverna e um Goblin usa seu ataque de velocidade para acertá-lo, mas o ataque foi facilmente defendido e ele mata o Goblin");

answer2 = prompt("Depois de alguns passos dentro da caverna, ele vê uma Aranha de costas para ele. Responda sim para o herói aproximar-se lentamente da aranha ou não para atacá-la.");
// No
console.log("A aranha era uma ilusão criada por algum mago e explode atingindo o herói, se ele não tivesse atacado, descobriria.");
// Yes
console.log("Quando nosso herói chegou mais perto da aranha e ela se virou, descobriu que a aranha é uma ilusão e passou.");

answer3 = prompt("Alguns metros de profundidade, ele escuta a mesma voz pedindo socorro, mas são dois caminhos. Responda Sim para a esquerda ou Não para a direita.");
// Yes
console.log("Nosso herói vai para a esquerda e a voz fica mais alta.");
// No
console.log("Nosso herói vai para o caminho da direita e depois de andar muito, ele entra em uma sala sem saída. O herói cansado tem que voltar.");

answer4 = prompt("O herói entra em uma sala com uma senhora amarrada. Responda Sim para ele entrar na sala devagar ou Não para correr até a senhora.");
// Yes
console.log("O herói vê um ataque vindo por trás e se defende.");
//No
console.log("O herói corre até a senhora, mas um ataque vem por trás e atinge o herói.");

answer5 = prompt("É um mago cruel e nosso herói tem duas opções para lutar com ele! Responda Sim para lutar usando magia contra magia ou Não para usar sua espada e escudo.");
// Yes
console.log("Usando magia é mais fácil derrotar o mago cruel, porque o herói é treinado em Magia Branca e Mago Cruel é treinado em Magia Negra.");
// No
console.log("É mais difícil vencer esta batalha sem usar magia.");

console.log(answer1, answer2, answer3, answer4, answer5);

noPoints = "Você falhou, apanhou e cansou durante sua jornada. O Mago Cruel matou o herói.";
oneOrTwoPoints = "Você falhou, o herói está cansado e apanhou, porém ainda conseguiu fugir.";
threePoints = "Você falhou, o herói quase mata o Mago Negro, mas por já estra machucado, não consegue e foge.";
fourPoints = "Você ganhou, apesar do herói ter sofrido durante a jornada, com custo venceu o Mago Cruel.";
fivePoints = "Você ganhou, seu herói chegou ileso à última batalha e derrotou o Mago Cruel.";

