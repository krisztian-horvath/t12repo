// Horváth Krisztián
// Team 12

let szamEgy=Number(prompt("Adjon meg egy számot:"));
let oszto=Number(prompt("Adjon meg egy osztót:"));

if (szamEgy%oszto==0) {
	document.write(`A ${oszto} osztója a ${szamEgy}-nek. A maradék 0.`);
} 
    else {
        document.write(`A ${oszto} nem osztója a ${szamEgy}-nek. Maradék nem 0.`);
    }

