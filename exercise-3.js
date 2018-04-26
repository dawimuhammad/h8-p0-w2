// phase 0 week 2 exercise 3 case if else

// input
var nama = 'Haddawi';
var peran = 'ksatria';

// func
if (nama !== '') {
    if (peran !== '') {
        console.log('Selamat datang di dunia Proxytia, '+nama);
        if (peran === 'ksatria') {
            console.log('Halo '+peran+' '+nama+', kamu dapat menyerang dengan pedangmu!');
        } else if (peran === 'penyihir') {
            console.log('Halo '+peran+' '+nama+', ciptakan keajaiban yang dapat membuat rekan-rekanmu menang!');
        } else if (peran === 'tabib') {
            console.log('Halo '+peran+' '+nama+', kamu akan membantu rekanmu yang terluka.');
        }
    } else {
        console.log('Halo '+nama+', pilih peranmu untuk memulai.');
    }
} else {
    console.log('Nama harus diisi!');
}
