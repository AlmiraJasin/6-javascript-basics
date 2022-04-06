function numSize (num) {
    if (typeof num !== 'number'
    || !isFinite(num)) {
        return 'ERROR';
    }

    const numAsString = '' + num;
    let size = numAsString.length

    if (num % 1 !== 0) {
        size--;
    }

    return size;
}


console.log(numSize(5), '-->', 1);
console.log(numSize(781), '-->', 3);
console.log(numSize(37060123456), '-->', 11);
console.log(numSize(true), '-->', 'ERROR');
console.log(numSize('asd'), '-->', 'ERROR');
console.log(numSize(NaN), '-->', 'ERROR');
console.log(numSize(3.14), '-->', '3');
console.log(numSize(0.0000001), '-->', '8');
console.log(numSize(100000000000000), '-->', '15');
