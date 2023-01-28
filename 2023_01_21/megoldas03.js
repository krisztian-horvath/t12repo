// Horváth Krisztián
// Team 12

let hatarAlso=Number(prompt("Adj meg az alsó határt:"));
let hatarFelso=Number(prompt("Add meg a felső határt:"));

let randomSzam;

do {
	randomSzam=Math.round(Math.random()*(hatarFelso-hatarAlso))+hatarAlso;
} while (randomSzam%2!=0);

document.write(`A random generált szám: ${randomSzam}, a megadott alsó határ:${hatarAlso}, a megadott felős határ:${hatarFelso}`);