let str = "JavaScript"
let vocal = []
let kataSplit = str.split("")
let HitunganHuruf = 0
for (a = 0; a < str.length; a++) {
    if (kataSplit[a] == "a" || kataSplit[a] == "i" || kataSplit[a] == "u" || kataSplit[a] == "e" || kataSplit[a] == "o") {
        vocal.push(kataSplit[a])
        HitunganHuruf++;
    }
}
console.log(HitunganHuruf)
console.log(vocal)