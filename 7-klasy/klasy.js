class Ogloszenie
{
    constructor(tytul, opis, kontakt, cena){
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    wyswietlOgloszenie(){
        console.log( "Ogłoszenie: Tytuł: " + this.tytul + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this.cena );
    }
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Świeżynka prosto od 80 letniego Niemca", "605-079-304", 15000);

ogloszenie1.wyswietlOgloszenie();

var ogloszenie2 = new Ogloszenie( "Sprzedam Audi", "Niemiec do granicy odprowadzał", "543-234-876", 24000);

ogloszenie2.wyswietlOgloszenie();