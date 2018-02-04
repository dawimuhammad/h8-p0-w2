// Exercise 9 Berlatih Penggunaan Function

// Tugas 1

function shoutOut() {
  console.log('Halo Function!');
}

console.log(shoutOut());

// Tugas 2
var par1, par2;
var num1 = 5;
var num2 = 6;

function calculateMultiply(par1, par2) {
  var calcResult;
  calcResult = par1*par2;
  return calcResult;
}

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Tugas 3

var name = 'Hadawi';
var age = 23;
var address = 'Cilebut, Bogor'
var hobby = 'Olahraga';

var pName, pAge, pAdress, pHobby;

function processSentence(pName, pAge, pAdress, pHobby) {
  var sentenceResult;
  console.log('Nama Saya '+ pName +', umur Saya '+ pAge +' tahun, alamat Saya di '+ pAdress +', dan Saya mempunyai hobi '+ pHobby);

}

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
