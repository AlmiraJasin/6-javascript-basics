/*
IF Sablonai:
    - if () {} 
    - if () {} else {}
    - if () {} else if {} else {}
    - if () {} ... else if {} else {}
    Keyword Parameter Value/Logic

Palyginimo operatoriai:
    - visi: >, <, >=, <=, == (lygu), != (nelygu), === (grieztai lygu)
    - naudotini: >, <, >=, <=, === (grieztai lygu), !==
    - nenaudotini: == (lygu), != (nelygu)

*/

const a = 7
const b = "5"

if (a > b) {
    console.log('A yra daugiau uz B')
} else {
    console.log('A nera maziau uz B')
}

console.log('----------');
const day = 0;

if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}

console.log('----------');
const akiuSpalva = 'zalia';

if (akiuSpalva === 'zalia') {
    console.log('Mergaite turi zalias akis');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Mergaites akys melynos');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('Akys yra rudos');
        } else {
            if (akiuSpalva === 'raudona') {
                console.log('Mergaite yra vampyras');
            }
        }
    }
}

console.log('----------');

const temperatura = 10;
const nuoKadaSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu === true) {
    if (temperatura >= nuoKadaSilta) {
        console.log('Lauke silta su krituliais');
    } else {
        console.log('Lauke salta su krituliais');
    }
} else {
    if (temperatura >= nuoKadaSilta) {
        console.log('Lauke silta be krituliu');
    } else {
        console.log('Lauke salta be krituliu');
    }
}

console.log('----------');



        




