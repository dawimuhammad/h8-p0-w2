// Exercise 11 Case Konversi Menit

var jam;
var menit;
var detik;

function konversiMenit(menit) {
  var resultTime;
  var resultMin;
  var resultSec;
  var minLength;
  var secLength;

  if (menit < 60) {
      resultMin = '0';
      resultSec = menit;
  } else {
      resultMin = Math.round(menit/60);
      resultSec = menit%60;
      if (resultSec < 10) {
          resultSec = '0' + resultSec;
      } else {
          resultSec = resultSec;
      }
  }
  resultTime =  resultMin + ':' + resultSec;
  return resultTime;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(154));
console.log(konversiMenit(120));
