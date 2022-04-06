function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += 1;
    }
    return suma;
}

console.log(sumaIntervale(-30, 70));