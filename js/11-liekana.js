function liekana(nuo, iki, daliklis) {
    let count = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }

    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai`
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));
console.log(liekana(0, 1000000, 7));
console.log(liekana(0, 1000000000, 7));