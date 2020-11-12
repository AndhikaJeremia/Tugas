let str = "hello dunia"
let vocal = []
let kataSplit = str.split("")
for (a = 0; a < str.length; a++) {
    if (kataSplit[a] == "a" || kataSplit[a] == "i" || kataSplit[a] == "u" || kataSplit[a] == "e" || kataSplit[a] == "o") {
        vocal.push(kataSplit[a])
    }
}
console.log(vocal)
console.log(vocal.join(""))