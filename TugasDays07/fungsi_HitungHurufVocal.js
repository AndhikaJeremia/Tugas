function hitunghurufvocal(kata) {
    let str = kata
    let katasplit = str.split("")
    let hitungvocal = []
    let hurufvocal = ['a', 'i', 'u', 'e', 'o']
    for (a = 0 ; a < katasplit.length; a++) {
        for (let b = 0; b < hurufvocal.length; b++) {
            if(katasplit[a] === hurufvocal[b]) {
                hitungvocal[b] = 1
            }
        }
    }
    let hitunganhurufvocal = hitungvocal.reduce((a, b) => a + b)
    return hitunganhurufvocal
}
console.log(hitunghurufvocal("ayam goreng"))
