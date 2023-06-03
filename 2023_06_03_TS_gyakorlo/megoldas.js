function DiakInfo(nev, csoport, tipus) {
    var csoportString;
    if (csoport < 10) {
        csoportString = "0" + String(csoport);
    }
    else {
        csoportString = String(csoport);
    }
    if (tipus) {
        return (nev + " [Team" + csoportString + "] - Junior Frontend");
    }
    else {
        return (nev + " [Team" + csoportString + "] - Webprogramozó");
    }
}
console.log(DiakInfo("Minta Márton", 8, true));
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
}
console.log(SzovegesErtekeles(2));
function HarommalOszthatokSzama(tomb) {
    var harommalOszthatoSzumma = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            harommalOszthatoSzumma++;
        }
    }
    return harommalOszthatoSzumma;
}
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var tomb = [];
    var szerepelE = false;
    var ujszam;
    while (mennyiseg > tomb.length) {
        ujszam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + 1;
        szerepelE = false;
        for (var j = 0; j < tomb.length; j++) {
            if (tomb[j] == ujszam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            tomb.push(ujszam);
        }
    }
    return tomb;
}
console.log(Nyeroszamok(5, 1, 90));
