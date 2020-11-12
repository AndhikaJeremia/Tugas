function hurufgedekecil(kata) {
    let str = kata
    let katasplit = str.split("")
    let x = []
    let tampung = []
    for (a = 0; a < katasplit.length; a++) {
        x.push(katasplit[a].charCodeAt())
        if (x[a] >= 97 && x[a] <= 122 ) {
            tampung.push(katasplit[a].toUpperCase())
        } else if (x[a] >= 65 && x[a] <= 90) {
            tampung.push(katasplit[a].toLowerCase())
        } else {
            tampung.push(katasplit[a])
        }
    }
    let jointampung = tampung.join("")
    return jointampung
}
console.log(hurufgedekecil("heLL wOlRd"))