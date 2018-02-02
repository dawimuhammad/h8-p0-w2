// Exercise 6 Berlatih Perulangan di JS

// deklarasi variabel

var looper = 2;
var count = 1;

// Perulangan

//
// 1. Looping menggunakan while
//

console.log('LOOPING PERTAMA');

while(looper <= 20) {
    var check = looper%2;
    if (check === 0) {
        console.log(looper+' - I love Coding');
    }
    looper = looper + 1;
}

console.log('LOOPING KE DUA');
while(looper>=2) {
    var check = looper%2;
    if (check === 0) {
        console.log(looper+' - I will become fullstack developer');
    }
    looper = looper - 1;
}

//
// 2. Looping menggunakan for
//

console.log('Looping Pertama');

for (count=1; count<=20; count++) {
  console.log(count+' - I love Coding!');
  if (count === 20){
      break;
  }
}

console.log('Looping Ke Dua');

for (count=20; count>=1; count--) {
  console.log(count+' - I will become fullstack developer!');
  if (count === 1){
      break;
  }
}

//
// 3. Ganjil Genap
//

// 3A. Perulangan Ganjil Genap

var checkOdd;

checkOdd = 1;

while (checkOdd<=100) {
    console.log(' ');
    console.log(checkOdd);
    var result = checkOdd%2;
    if (result === 0) {
        console.log('Genap');
    } else if (result !== 0){
      console.log('Ganjil')
    }
    checkOdd++;
}

// 3B. Pertambahan Counter 2

var checkTwo;

checkTwo = 1;

while (checkTwo<=100) {
    console.log(' ');
    var result = checkTwo%3;
    if (result === 0) {
        console.log(checkTwo+' KELIPATAN 3');
    } else if (result !== 0){
      console.log(checkTwo+'  "" ')
    }
    checkTwo++;
}

// 3C. Pertambahan Counter 6

var checkSix;

checkSix = 1;

while (checkSix<=100) {
    console.log(' ');
    var result = checkSix%6;
    if (result === 0) {
        console.log(checkSix+' KELIPATAN 6');
    } else if (result !== 0){
      console.log(checkSix+'  "" ')
    }
    checkSix++;
}

// 3D. Pertambahan Counter 10

var checkTen;

checkTen = 1;

while (checkTen<=100) {
    console.log(' ');
    var result = checkTen%10;
    if (result === 0) {
        console.log(checkTen+' KELIPATAN 10');
    } else if (result !== 0){
      console.log(checkTen+'  "" ')
    }
    checkTen++;
}
