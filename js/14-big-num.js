function bigNum(list) {
    //Validation
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sarasas tuscias';
    } 
    //Logic
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
    //Result validation    
    if (typeof number !== 'number' || !isFinite(number)) {
        continue;
    }

        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nera skaiciu';
    }
    //Result return
    return biggestNumber;
}







console.log(bigNum([1]), '-->', 1);
console.log(bigNum([1, 2, 3]), '-->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '-->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '-->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(bigNum('pomidoras' ), '-->', 'ERROR: netinkamas tipas');
console.log(bigNum([] ), '-->', 'ERROR: sarasas tuscias');
console.log(bigNum(['x'] ), '-->', 'ERROR: sarase nera skaiciu');
console.log(bigNum(['x', 1, 2] ), '-->', '2');
console.log(bigNum([true, 1] ), '-->', '1');
