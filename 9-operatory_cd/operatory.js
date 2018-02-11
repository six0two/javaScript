var liczba1 = 13;
var liczba2 = 6;

var pietro = 14;

var wynik = (liczba1 == liczba2) ? "prawda" : "fałsz";

console.log(wynik);

if (liczba1 > liczba2 && pietro == 14) {
    console.log("Spełnione zostały dwa warunki , także TRUE");
}

if (liczba1 == liczba2) {
    console.log("Liczby są równe");
} else if (liczba1 < liczba2) {
    console.log("liczba1 większa od liczby2");
} else if (liczba1 == "smog") {
    console.log("liczba1 równa się smog");
} else {
    console.log("kod który wykona się gdy żaden z warunków nie zostanie spełniony");
}