var liczba = 15.5;
var text = "Tadzio Wiertełko";
var prawda = true;

/*console.log( typeof liczba );
console.log( typeof text);
console.log( typeof prawda);*/


//typ boolean

var czyJestSmog = true;
if( czyJestSmog ) {
    console.log("Jest smog");
} else {
    console.log("Nie ma smogu");
}

//typ number

var pensja = 4500;
var premia = 5/100;

var calkowitaPensja = pensja + pensja * premia;
console.log(calkowitaPensja);

var pensjaString = "4500";
var premiaString = "1200";

var calkowitaPensjaString = pensjaString +"/"+ premiaString;
console.log(calkowitaPensjaString);

// typy specjalne

var zmiennaBezWartosci;
console.log(zmiennaBezWartosci);

var zmiennaNull = null;
console.log(zmiennaNull);