let massa = 67
let tinggi = 1.78
let imt = massa / tinggi**2


console.log(`Massa : ${massa}kg
Tinggi : ${tinggi}meter
IMT : ${imt}
`)
if (imt < 18.5){
    console.log("kurus")
}   else if (imt<=24.9) {
        console.log("berat badan anda ideal")
}   else if (imt<=29.9) {
        console.log("berat badan berlebih")
}   else if (imt<=39.9){
        console.log("parah sih")
}   else  { 
    console.log("obesitas")
}