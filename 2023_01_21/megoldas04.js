// Horváth Krisztián
// Team 12

let eletkor=Number(prompt("Adja meg a korát:"));

if (eletkor<0 || eletkor>120) {
	document.write(`Hibásan megadott életkor`);
} 
    else if (eletkor<=6) {
        document.write(`Kisgyermekkor`);
    }
	else if (eletkor<=12) {
        document.write(`Gyermekkor`);
    }
	else if (eletkor<=16) {
        document.write(`Serdülőkor`);
    }
	else if (eletkor<=20) {
        document.write(`Ifjúkor`);
    }
	else if (eletkor<=30) {
        document.write(`Fiatal felnőtt kor`);
    }
	else if (eletkor<=60) {
        document.write(`Felnőtt kor`);
    }
    else {
        document.write(`Aggkor`);
    }