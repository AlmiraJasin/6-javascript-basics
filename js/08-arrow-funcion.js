const pirmas = 7;
const antras = 5;

//iprasta funkcija

function suma (a,b) {
    return a + b;
}

const r1 = suma (88, 22);
console.log(r1);

const r = suma (pirmas, antras);
console.log(r);

//kintamajam priskirta anonimine funkcija

const atimtis = function (a,b) {
    return a - b;
}
const r2 = atimtis(pirmas, antras);
console.log(r2);

//arrow funkcija

const dalyba = (a,b) => {
    return a / b;
}
const r3 = dalyba(pirmas, antras);
console.log(r3);

//arrow funkcija
//jei logikos bloke {} yra viena procedura, tai galime nerasyti {} ir return

const daugyba = (a,b) => a * b;

const r4 = daugyba (pirmas, antras);
console.log(r4);

//arrow funkcija
//jei logikos bloke {} yra viena procedura, tai galime nerasyti ()

const kvadratu = a => a * a;

const r5 = kvadratu (pirmas);
console.log(r5);

const tekstas = 'Labas rytas';

const pirmaRaide = s => s[0];
console.log(pirmaRaide(tekstas));



