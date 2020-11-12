let angka = 0
while (angka <= 25) {
    
    // chek kondisi
    if (angka % 2 != 0) {
        angka++
        console.log(`${angka} genap`) 
        continue
    } else if (angka % 2 === 0) {
        angka++
        console.log(`${angka} ganjil`)
        continue
    }
}