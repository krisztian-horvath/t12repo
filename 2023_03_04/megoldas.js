// Horváth Krisztián (Team 12)

function hosszEllenor(szoveg){
	if (szoveg.length>=8){
    	return true
    }
    else {
    	return false
    }
}

function tajSzamEllenor(tajSzam){
	if (tajSzam.length==9){
    	let paratlanElemOsszeg=0;
        for(let i=0; i<8 ; i+=2){
        	paratlanElemOsszeg+=Number(tajSzam.charAt(i));
        }
    	let parosElemOsszeg=0;
        for(let i=1; i<8 ; i+=2){
        	parosElemOsszeg+=Number(tajSzam.charAt(i));
        }
        if ((parosElemOsszeg*7+paratlanElemOsszeg*3)%10==tajSzam[8]){
        	return true;
        }
        else {
        	return false;
        }
    }
    else {
    	return false;
    }
}

function tombTerjedelem(tomb){
	let min=tomb[0];
    let max=tomb[0];
    for (let i=1; i<tomb.length; i++){
    	if (tomb[i]<min){
        	min=tomb[i];
        }
        if (tomb[i]>max){
        	max=tomb[i];
        }
    }
    return max-min;
}

function legidosebbDolgozo(Dolgozok){
	let legidosebb=Number(Dolgozok[0].kor);
    let legidosebbInd=0;
    for (let i=1; i<Dolgozok.length; i++){
    	if (Number(Dolgozok[i].kor)>legidosebb){
        	legidosebb=Number(Dolgozok[i].kor);
            legidosebbInd=i;
        }
    }
    return legidosebbInd;
}

function fizetesEmeles(Dolgozok){
	let sumFizetes=0;
    for (let i=0; i<Dolgozok.length; i++){
    	sumFizetes+=Number(Dolgozok[i].fizetes);
    }
    let atlagFizetes=sumFizetes/Dolgozok.length;
    for (let i=0; i<Dolgozok.length; i++){
    	if (Dolgozok[i].fizetes<atlagFizetes){
        	Dolgozok[i].fizetes=Math.round(Number(Dolgozok[i].fizetes)*1.1);
        }
    }
    return Dolgozok;
}

let tesztSzoveg1=("teszt");
let tesztSzoveg2=("feladatteszt");

document.write("Az 1. teszt szöveg: '" +tesztSzoveg1+ "'. Megfelel a feltételnek?: " +hosszEllenor(tesztSzoveg1)+"<br>");
document.write("Az 2. teszt szöveg: '" +tesztSzoveg1+ "'. Megfelel a feltételnek?: " +hosszEllenor(tesztSzoveg2)+"<hr>");

document.write("A 040655330 helyes tajszám? " +tajSzamEllenor("040655330")+ "<br>");
document.write("A 111111111 helyes tajszám? " +tajSzamEllenor("111111111")+ "<br>");
document.write("A 037687210 helyes tajszám? " +tajSzamEllenor("037687210")+ "<br>");
document.write("A 019536646 helyes tajszám? " +tajSzamEllenor("019536646")+ "<hr>");

let vizsgaltTomb=[3, 5, 10, 16, 9];

document.write("A vizsgált tömb terjedelme: " +tombTerjedelem(vizsgaltTomb)+ "<hr>");

const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]

document.write("A legidősebb objektum elem indexe: " +legidosebbDolgozo(Dolgozok)+ "<hr>");

fizetesEmeles(Dolgozok);
for (let i=0;i<Dolgozok.length;i++){
	document.write("Név:" +Dolgozok[i].nev+ "<br>");
	document.write("Fizetés:" +Dolgozok[i].fizetes+ "<br><br>");
}