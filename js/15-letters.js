function letters (text, step) {
    if (typeof text !== 'string') {
        return 'ERROR: Pirmas kintamasis nera tekstas';
    }
    if (typeof step !== isFinite) {
        return 'ERROR: Antras kintamasis nera skaicius';
    }
    if (!isFinite(step)) {
        return 'ERROR: Turi buti tikrasis skaicius';
    }
    if (step % 1 !==0) {
        return 'ERROR: Turi buti sveikasis skaicius';
    }
    if (step === 0) {
        return 'ERROR: Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (step > text.length) {
        return 'ERROR: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }

    let raides = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            raides += text[1];
      } 
    } else {
        for (let i = text.length + step; i >= step; i += step) {
            raides += text[1];
        }
    return raides;
    }
}






console.log(letters('abcdefg', 2), '-->', 'bdf');
console.log(letters('abcdefghijkl', 3), '-->', 'cfil');
console.log(letters('abcdefghijkl', -3), '-->', 'cfil');
console.log(letters('abcdefg', 'iki'), '-->', 'ERROR: Antras kintamasis nera skaicius');
console.log(letters('abcdefg', NaN), '-->', 'ERROR: Turi buti tikrasis skaicius');
console.log(letters('abcdefg', 0.0001), '-->', 'ERROR: Turi buti sveikasis skaicius');
console.log(letters(2, 'iki'), '-->', 'ERROR: Pirmas kintamasis nera tekstas');
console.log(letters('abc', 0), '-->', 'ERROR: Antrasis kintamasis turi būti didesnis už nulį.');
console.log(letters('abc', 4), '-->', 'ERROR: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
console.log(letters(1561, 2), '-->', 'ERROR: Tekstas yra netinkamo tipo');