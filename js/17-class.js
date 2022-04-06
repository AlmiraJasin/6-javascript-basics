/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas;

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.spalva = color;
        this.turnedOn = false;
        this.money = 0;
    }

    switchOn() {
        this.turnedOn = true;
    }

    switchOff() {
        this.turnedOff = false;
    }

    cashIn(money) {
        //JEI NEIJUNGTAS - ERROR
        //JEI NE NORMALUS SKAICIUS - ERROR
        //ISKAICIUOJAM PINIGUS

        if (!this.turnedOn) {
            console.log(this.gatve, 'Aparatas nera ijungtas');
            return;
        } 
        if (typeof money !== 'number'
        || !isFinite(money)) {
            console.log(this.gatve, 'Netikras pinigas');
            return;
        }
        if (money <= 0) {
            console.log(this.gatve, 'Negalima neigiama reiksme');
            return;
        }

        this.money += money;
        console.log(`${this.gatve} inesta: ${money} pinigu`);
    }

    cashOut(money) {

        if (!this.turnedOn) {
            console.log(this.gatve, 'Aparatas nera ijungtas');
            return;
        } 
        if (typeof money !== 'number'
        || !isFinite(money)) {
            console.log(this.gatve, 'Netikras pinigas');
            return;
        }
        if (money <= 0) {
            console.log(this.gatve, 'Negalima neigiama reiksme');
            return;
        }
        if (this.money < money) {
            console.log(this.gatve, 'Per mazai pinigu isgryninimui');
            return;
        }

        this.money -= money;
        console.log(`${this.gatve} isgryninta: ${money} pinigu`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas1.cashIn(10);
bankomatas1.cashOut(5);
bankomatas1.cashOut(10);


console.log(bankomatas1.money);

















