// Exercise 11 Case Balik Kata

var kata;

function balikKata(kata) {
  var i = 1;
  var resultKata = '';
  var lengthResultKata = resultKata.length;
  var lengthKata = kata.length;
  while (lengthKata>=i) {
    //resultKata = resultKata + kata[lengthKata - (i)];
    if (lengthResultKata===0) {
        resultKata = kata.charAt(lengthKata - i);
        lengthResultKata = 1;
    } else {
        resultKata = resultKata + kata.charAt(lengthKata - i);
    }
    lengthKata--;
  }
  return resultKata;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super'));
