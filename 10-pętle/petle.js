//for ( wyrażenie początkowe ; wyrażenie warunkowe ; wyrażenie modyfikujące )
//{instrukcje do wykonania}

var ileRazy = 30;

for( var i = 0; i < ileRazy; i++) {
    
    var iteracja = i + 1;
    console.log("Iteracja pętli nr " + iteracja);
}


var tablica = ["Audi", "Opel", "Honda", "Mazda", "Nissan"];

for( var i = 0; i < tablica.length; i++) {
    console.log( "Tablica! Index = " + i + " , wartość = " + tablica[i] );
}

tablica.forEach(function( elemntTablicy, indexTablicy) {
    console.log( "Index: " + indexTablicy + " , wartość: " + elemntTablicy);
} ) ;

for( var i = 0; i < tablica.length; i++) {
    if( i==2 || i==4 ) {
        continue;
    }
    console.log( i , tablica[i]);
}

