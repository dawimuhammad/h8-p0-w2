// phase 0 week 2 exercise 7 looping asterisk

// barisan bintang

var rows = 5;

for (let i=0; i<rows; i++) {
    console.log('*');
}


// barisan bintang dengan nested loop

for (let i=0; i<rows; i++) {
    let output = '';
    for (let j=0; j<rows; j++) {
        output += '*';
    }
    console.log(output);
}


// barisan tangga bintang dengan nested loop

for (let i=0; i<rows; i++) {
    let output = '';
    for (let j=0; j<=i; j++) {
        output += '*';
    }
    console.log(output);
}
