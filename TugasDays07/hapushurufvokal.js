function hapushurufvocal(kata) {
    let str = kata
    let katasplit = str.split("")
    let vocal = []
    let nonvocal = []
    for (a = 0; a < katasplit.length; a++) {
        if (katasplit[a] == "a" || katasplit[a] == "i" || katasplit[a] == "u" || katasplit[a] == "e" || katasplit[a] == "o") {
            vocal.push(katasplit[a])
        } else {
            nonvocal.push(katasplit[a])
        }
    }
    let JoinNonVocal = nonvocal.join("")
    return JoinNonVocal
}
console.log(hapushurufvocal("javascript"))