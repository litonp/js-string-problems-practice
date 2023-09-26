const lyrics = 'Tumi bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte pari ni';
const doseExist = lyrics.includes('pakhi');
// console.log(doseExist);

// ------------
// indexOf
console.log(lyrics.indexOf('kalo'));
console.log(lyrics.indexOf('Tumi'));

// 
if (lyrics.indexOf('sada') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}

// startsWith
console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));