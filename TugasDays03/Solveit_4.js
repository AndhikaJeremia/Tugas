// awal dan tahun
let hari = 485
let tahun = Math.floor(hari / 360)
//update utk bulan
hari = hari - tahun * 360
let bulan = Math.floor(hari / 30)
//update untuk minggu
hari = hari - bulan * 30
minggu = Math.floor(hari / 7)
//update untuk hari
hari = hari - minggu * 7

console.log(tahun)
console.log(bulan)
console.log(minggu)
console.log(hari)
