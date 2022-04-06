/*
visi mokiniai turi tik po 4 pazymius ir reikia suskaiciuoti vidurki
*/

const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petriukas', petroVidurkis);


function vidurkis(pazymiuSarasas) {
    console.log(pazymiuSarasas);
    let pazymiuSuma =0;
    pazymiuSuma += pazymiuSuma[0];
    pazymiuSuma += pazymiuSuma[1];
    pazymiuSuma += pazymiuSuma[2];
    pazymiuSuma += pazymiuSuma[3];

    return 0;
}

const petrVidurkis = vidurkis(petras);
console.log('Petras', petrVidurkis);

const marVidurkis = vidurkis(maryte);
console.log('Maryte', marVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('Jonas', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona', onosVidurkis);

/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

function vardoAnalize(name) {
    return `Vardo ${name} pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`
}

const petroVardas = vardoAnalize('Petras')
console.log(petroVardas);

const onosVardas = vardoAnalize('Ona')
console.log(onosVardas);



console.log('------------');
function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item
    }
    return sum / list.length;
}

const rez1 = average([10, 2, 0, 8]);
console.log(rez1)

const rez2 = average([10, 9, 10, 9]);
console.log(rez2);