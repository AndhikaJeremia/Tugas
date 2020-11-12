let number = 9
let n1 = 0, n2 = 1, lanjutan;
//output
console.log('fibonaci nih : ')
for (let a = 1; a <= number; a++) {
    console.log(n1);
    lanjutan = n1 + n2
    n1 = n2
    n2 = lanjutan
}


//or 
let valueawal = 0
let valueakhir = 1
console.log(valueawal)
console.log(valueakhir)

while (true) {
    //simpan value akhir yg lama
    let baru = valueakhir

    //update value
    valueakhir += valueawal
    valueawal = baru

    //check value
    if (valueakhir > 25) {
        break
    }
    console.log(valueakhir)
}