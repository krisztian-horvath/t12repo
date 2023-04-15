//Vizsgált objektum:
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
];

function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

//1. feladat tesztjei:
function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Kocka felszín", 2, 24, KockaFelszin(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka felszín", 2, 24);
    }
}
function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Kocka felszín", 3, 54, KockaFelszin(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka felszín", 3, 54);
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Kocka felszín", 5, 150, KockaFelszin(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka felszín", 5, 150);
    }
}



//2. feladat tesztjei:
function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 2, 8, KockaTerfogat(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 2, 8);
    }
}
function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 3, 27, KockaTerfogat(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 3, 27);
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 5, 125, KockaTerfogat(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 5, 125);
    }
}



//3. feladat tesztjei:
function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos", PhErtek(9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos");
    }
}
function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges", PhErtek(7));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges");
    }
}
function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas", PhErtek(5.5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas");
    }
}



//4. feladat tesztjei:
function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Első N szám összege", 3, 6, ElsoNSzamOsszege(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám összege", 3, 6);
    }
}
function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Első N szám összege", 10, 55, ElsoNSzamOsszege(10));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám összege", 10, 55);
    }
}
function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Első N szám összege", 21, 231, ElsoNSzamOsszege(21));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám összege", 21, 231);
    }
}



//5. feladat tetsztjei:
function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Max páros elem", [12, 3, 7, 19, 21], 12, MaxParos([12, 3, 7, 19, 21]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Max páros elem", [12, 3, 7, 19, 21], 12);
    }
}
function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("Max páros elem", [28, 14, 2, 42, 69], 42, MaxParos([28, 14, 2, 42, 69]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Max páros elem", [28, 14, 2, 42, 69], 42);
    }
}
function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("Max páros elem", [12, 21, 54, 33, 21], 54, MaxParos([12, 21, 54, 33, 21]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Max páros elem", [12, 21, 54, 33, 21], 54);
    }
}



//6. feladat tesztjei:
function Teszt16() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8, MaganHangzokSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8);
    }
}
function Teszt17() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5, MaganHangzokSzama("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5);
    }
}
function Teszt18() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7, MaganHangzokSzama("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7);
    }
}



//7. feladat tesztjei:
function Teszt19() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS", SzovegVisszafele("Szeretem a programozás"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS");
    }
}
function Teszt20() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG", SzovegVisszafele("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG");
    }
}
function Teszt21() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR", SzovegVisszafele("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR");
    }
}



//8. feladat tesztje:
function Teszt22() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34, CegAtlagEletkor(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34);
    }
}



//Tesztesetek futtatása
function TesztFuttato() {
    //Kocka felszín függvény
    Teszt01();
    Teszt02();
    Teszt03();
    //Kocka térfogat függvény
    Teszt04();
    Teszt05();
    Teszt06();
    //Ph érték függvény
    Teszt07();
    Teszt08();
    Teszt09();
    //Első N szám összege függvény
    Teszt10();
    Teszt11();
    Teszt12();
    //Max páros maxpáros függvény
    Teszt13();
    Teszt14();
    Teszt15();
    //Magánhangzók száma függvény
    Teszt16();
    Teszt17();
    Teszt18();
    //Szöveg visszafelé függvény
    Teszt19();
    Teszt20();
    Teszt21();
    //Cég átlagéletkor függvény
    Teszt22();

}
TesztFuttato();