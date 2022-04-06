/*
Numbers:
-Normalus
    - sveikieji
    - desimtainiai
-Nenormalus
    - NaN (no-a-number)  
    - Infinity; -Infinity

Operatoriai:
++ - Padidinimas vienu vnt
-- - Sumazinimas vienu vnt
+=, /=, -=, %= - savo paties reiksmes pakeitimas (a = a + 5  ==  a += 5)
*/

const sveikasis = 5
const desimtainis = 3.14
const neigianasDesimtainis = -3.14
const neSkaicius = NaN
const begalybe = Infinity

const pirmas = 7
const antras = 5

const dalmuo = pirmas / antras
console.log(dalmuo)

console.log('num; num')
console.log(7 + 5)
console.log(7 - 5)
console.log(7 * 5)
console.log(7 - 5)

console.log('num; string')
console.log(7 + '5')
console.log(7 - '5')
console.log(7 * '5')
console.log(7 - '5')

console.log('num; true')
console.log(7 + true)
console.log(7 - true)
console.log(7 * true)
console.log(7 - true)

console.log('num; false')
console.log(7 + false)
console.log(7 - false)
console.log(7 * false)
console.log(7 - false)

console.log('true; num')
console.log(true + 7)
console.log(true - 7)
console.log(true * 7)
console.log(true - 7)

console.log('false; num')
console.log(false + 7)
console.log(false - 7)
console.log(false * 7)
console.log(false - 7)


console.log('--------')
console.log(2 ** 4)
console.log(3.14 ** 3.14)
console.log(7 % 2)
console.log(13 % 5)
console.log(13 % 14)

console.log('--------')
let pinigine = 0
console.log('Pinigine', pinigine++)
console.log('Pinigine', pinigine++)
console.log('Pinigine', pinigine++)
console.log('Pinigine', pinigine++)
console.log('Pinigine', pinigine++)

console.log('--------')
pinigine = 0
console.log('Pinigine', ++pinigine)
console.log('Pinigine', ++pinigine)
console.log('Pinigine', ++pinigine)
console.log('Pinigine', ++pinigine)
console.log('Pinigine', ++pinigine)

console.log('--------')
let skolaAfter = 0
console.log('skola', skolaAfter--)
console.log('skola', skolaAfter--)
console.log('skola', skolaAfter--)
console.log('skola', skolaAfter--)
console.log('skola', skolaAfter--)

console.log('--------')
let skolaBefore = 0
console.log('skola', --skolaBefore)
console.log('skola', --skolaBefore)
console.log('skola', --skolaBefore)
console.log('skola', --skolaBefore)
console.log('skola', --skolaBefore)

let a = 0
console.log(a)
a = a + 1
console.log(a)
a++
console.log(a)
++a
console.log(a)

console.log('--------')
let b = 0
console.log(b)
b = b + 3
console.log(b)
b++
b++
b++
console.log(b)
b += 3
console.log(b)
b += 3
console.log(b)
b += 3
console.log(b)

console.log('--------')
let c = 16
const d = 2
console.log(c)
c /= d
console.log(c)
c /= d
console.log(c)
c /= d
console.log(c)
c /= d
console.log(c)
