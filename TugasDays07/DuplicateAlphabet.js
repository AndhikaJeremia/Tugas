function duplicate(kata) {
    let str = kata
    let katasplit = str.split("").sort().filter(e => e.trim().length)
    let z = []
    let x = 1
    for (a = 0 ; a < katasplit.length; a++) {
        if (katasplit[a] === katasplit[a + 1] ) {
            x++
        } else {
            if (x > 1 ) {
                let hasil = `${katasplit[a]} : ${x}`
                z = [hasil, z]
            }
            x = 1
        }
        
    }
    console.log(`jumlah duplikat => ` + z)
}
duplicate('i love javascript')