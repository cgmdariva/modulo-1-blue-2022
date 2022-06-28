const prompt = require("prompt-sync")();

console.log("The history begun a long time ago. In north of the White Hills, our hero listening a voice in the wind calling for help. The voice say: ");

console.log('"I am close to you, in the cave with two waterfalls beside the entrance."');

console.log("Our hero immediately go to the cave and enter.");

answer1 = prompt("Our hero enter to the cave with your sword in hands? Yes or No?");
// No
console.log("Our hero enter disarmed and a Goblin use your speed attack for hit him. But quickly the counter attack kill the Goblin.");
// Yes
console.log("Our hero enter armed in the cave and a Goblin use your speed attack for hit him, but the attack was easily defended.");

answer2 = prompt("After some steps inside the cave, he see a Spider with his back to him. Answer yes for the hero slowly approach the spider or no to attack it.");
// No
console.log("The spider was a ilusion created by some mage and explodes hiting the hero, if he hadn't attacked, he would found out.");
// Yes
console.log("When our hero come more close to the spider and it turned, he descovered that spider is an ilusion and pass.");

answer3 = prompt("Some meters depth, he listening the same voice calling for help, but are two ways. Answer Yes for left or No for right.");
// Yes
console.log("Our hero goes to the left way and the voice gets louder.");
// No
console.log("Our hero goes to the right way and after walking a lot, he get in a no exit room. The hero tired has to turn back.");

answer4 = prompt("The hero get in a room with one lady tied. Answer Yes for he enter in the room slowly or No for run to the lady.");
// Yes
console.log("Te hero see an attack coming from behind and defend.");
//No
console.log("The hero run to the lady, bt one attack coming from behind and hit the hero.");

answer5 = prompt("It's a cruel mage and our hero have two options to fight with him! Answer Yes for fight using magic against magic or No for using your sword and shield.");
// Yes
console.log("Using mage its more waily to defeat the cruel mage, because the hero are trained in White Magic and Cruel Mage are trained in Black Magic.");
// No
console.log("It's more difficult to win this batlle without using magic.")

console.log(answer1, answer2, answer3, answer4, answer5);