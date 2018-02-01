// ASSIGNMENT IF CASE
//input variabel
var nama = 'Ana';
var peran = 'Penyihir';


//algoritma kondisi
if (nama) {
    if (peran) {
        console.log('Selamat datang di Dunia Proxytia,'+nama+'.');
        if (peran === 'Ksatria') {
            console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu. Keren!');
        } else if (peran === 'Tabib') {
            console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka. Mulia sekali.');
        } else if (peran === 'Penyihir') {
            console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu. Pohon hidup, serang!');
        }
    } else {
          console.log('Halo '+nama+', pilih peran untuk memulai Game!');
    }
} else {
    console.log('Nama harus di isi!');
}
