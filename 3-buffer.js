// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10)

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from([257, 257.5, -255, '1']);

const buf6 = Buffer.from('tést');

const buf7 = Buffer.from('tést', 'latin1');

const buf8 = Buffer.from('hello world', 'utf8');

// console.log(buf8.toString('hex'));

const buf9 = Buffer.from([1,2,3])
for( const b of buf9 ) {
    console.log(b)
}

console.table([buf1, buf2, buf3, buf4, buf5, buf6, buf7, buf8, buf8.toString('hex')])