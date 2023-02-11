function keszito(){
	document.write("Horváth Krisztián<br>");
    document.write("Junior Frontend<br>");
    document.write("Team12<br>");
}

function hatvanyozo(szam,hatvany){
	let hatvanySzam=szam**hatvany;
	return hatvanySzam;
}

function parosLetrehoz(alsoHatar,felsoHatar){
	if (alsoHatar%2!=0){
		alsoHatar++;
    }
	let randomParosSzam=Math.round(Math.random()*((felsoHatar-alsoHatar)/2))*2+alsoHatar;
    return randomParosSzam;
}

function testTomegIndex(testTomeg,testMagassag){
	let testTomegIndex;
    if (testTomeg==0 || testMagassag==0){
    	testTomegIndex=("hibasAdat");
    }
    else if (testTomeg/testMagassag**2<16) {
    	testTomegIndex=("sulyosSovanysag");    
    }
    else if (testTomeg/testMagassag**2<17) {
    	testTomegIndex=("mersekeltSovanysag");    
    }
    else if (testTomeg/testMagassag**2<18.5) {
    	testTomegIndex=("enyheSovanysag");    
    }
    else if (testTomeg/testMagassag**2<25) {
    	testTomegIndex=("normalisTestsuly");    
    }
    else if (testTomeg/testMagassag**2<30) {
    	testTomegIndex=("tulsulyos");    
    }
    else if (testTomeg/testMagassag**2<35) {
    	testTomegIndex=("IfokuElhizas");    
    }
    else if (testTomeg/testMagassag**2<40) {
    	testTomegIndex=("IIfokuElhizas");    
    }
    else {
    	testTomegIndex=("IIIfokuSulyosElhizas");    
    }
    return testTomegIndex;
}

function egeszOsztoE(szam,oszto){
	let egeszOszto=false;
	if (szam%oszto==0){
    	egeszOszto=true;
    }
    return egeszOszto;
}

function KiiratasHatvany(szamEgy,hatvany,hatvanySzam){
	document.write(`A megadott szám: ${szamEgy}. A ${hatvany}. hatványa=${hatvanySzam}<br>`);
}

function KiiratasRandomParos(alsoHatar,felsoHatar,parosSzam){
	document.write(`A megadott alsóhatár: ${alsoHatar}, a felső határ: ${felsoHatar}. A gernerált páros szám=${parosSzam}<br>`);
}

function KiiratasTestTomegI(testTomeg,testMagassag,testTomegIndex){
	if (testTomegIndex==("hibasAdat")){
		document.write("A megadott tömeg vagy magasság hibás<br>");
    }
    else {
    	document.write(`${testTomeg} kg testtömeg ${testMagassag*100} cm magasság mellett Ön `);
        if (testTomegIndex==("sulyosSovanysag")){
        	document.write(`a súlyosan sovány `);
        }
        else if (testTomegIndex==("mersekeltSovanysag")){
        	document.write(`a mérsékelt sovány `);
        }
		else if (testTomegIndex==("enyheSovanysag")){
        	document.write(`az enyhe sovány `);
        }
		else if (testTomegIndex==("normalisTestsuly")){
        	document.write(`a normális testsúlyú `);
        }
		else if (testTomegIndex==("tulsulyos")){
        	document.write(`a túlsúlyos `);
        }
		else if (testTomegIndex==("IfokuElhizas")){
        	document.write(`az I. fokú elhízott `);
        }
		else if (testTomegIndex==("IIfokuElhizas")){
        	document.write(`a II. fokú elhízott `);
        }
		else if (testTomegIndex==("IIIfokuSulyosElhizas")){
        	document.write(`a III. fokú elhízott `);
        }
        document.write(`csoportba tartozik. <br>`);
    }
}

function KiiratasEgeszOsztoE(szam,oszto){
    document.write(`szám: ${szam} osztó: ${oszto}. `);
	if (egeszOsztoE(szam,oszto)==true){
    	document.write(`Egész osztója<br>`);
    }
    else {
    	document.write(`NEM egész osztója<br>`);
    }
}

let szam1=2;
let szam2=5;
let hatvany=3;
let hatvanySzam1=hatvanyozo(szam1,hatvany);
let hatvanySzam2=hatvanyozo(szam2,hatvany);

let alsoHatar=1;
let felsoHatar=100;
let parosSzam=parosLetrehoz(alsoHatar,felsoHatar);

let testTomeg1=200;
let testTomeg2=45;
let testTomeg3=25;
let testMagassag1=2;
let testMagassag2=1.5;
let testMagassag3=1.2;
let testTomegIndex1=testTomegIndex(testTomeg1,testMagassag1);
let testTomegIndex2=testTomegIndex(testTomeg2,testMagassag2);
let testTomegIndex3=testTomegIndex(testTomeg3,testMagassag3);

keszito();

KiiratasHatvany(szam1,hatvany,hatvanySzam1);
KiiratasHatvany(szam2,hatvany,hatvanySzam2);

KiiratasRandomParos(alsoHatar,felsoHatar,parosSzam);

KiiratasTestTomegI(testTomeg1,testMagassag1,testTomegIndex1);
KiiratasTestTomegI(testTomeg2,testMagassag2,testTomegIndex2);
KiiratasTestTomegI(testTomeg3,testMagassag3,testTomegIndex3);

KiiratasEgeszOsztoE(25,5);
KiiratasEgeszOsztoE(1050,7);
KiiratasEgeszOsztoE(2048,3);