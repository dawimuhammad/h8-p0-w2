// Exercise 10 Perbangingan Angka Menggunakan Function

var angka1, angka2;

function bandingkanAngka(angka1, angka2) {
  if (angka1 === angka2) {
    return '-1';
  } else if (angka1 < angka2) {
    return true;
  } else if (angka1 > angka2) {
    return false;
  }
}

console.log(bandingkanAngka(5,8));
console.log(bandingkanAngka(5,3));
console.log(bandingkanAngka(5,5));
console.log(bandingkanAngka(8,8));
console.log(bandingkanAngka(15,8));
