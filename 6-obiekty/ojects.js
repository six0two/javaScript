var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function(){
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost);
}
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);

// dwa sposoby dostania się do pola obiektu

osoba.wyswietlSzczegoly();
// wywołanie funkcji. Funkcja ma już w sobie log.

osoba.wiek = 36;
osoba.wyswietlWiek = function(){
    console.log(this.wiek);
}
//dodanie właściwości

osoba.wyswietlWiek();
