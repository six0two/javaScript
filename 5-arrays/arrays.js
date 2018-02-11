var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

console.log(imiona[2]);
//licznie rozpoczynamy od 0

imiona[5] = "Monika";
imiona[6] = "Marcin";
//dodajemy kolejne elementy do tablicy

console.log(imiona);

imiona.push("Mikołaj" , "Adam");
console.log(imiona);
//push dodaje element na końcu tablicy i z automatu przypisze kolejny indeks

imiona.pop();
console.log(imiona);
//pop kasuje ostatni element z końca tablicy

imiona.unshift("Karol" , "Tomek");
console.log(imiona);
// unshift dodanie elementów na końcu tablicy

imiona.shift();
console.log(imiona);
//shift kasuje element z początku tablicy

console.log(imiona.length);
// sprawdzenie ilości elementów w tablicy

var tablicaJakoTekst = imiona.join();
console.log(tablicaJakoTekst);
//rozbijanie tablicy na ciąg tekstowy

var tablicaJakoTekst = imiona.join("---");
console.log(tablicaJakoTekst);
//rozbijanie tablicy na ciąg tekstowy z parametrem

var imionaReverse = imiona.reverse();
console.log(imionaReverse);
//odwracanie tablicy

var posortowana = imiona.sort();
console.log(posortowana);
//sortowanie tablicy alfabetycznie

