function checkout() {
    console.log("Ulala")
    //get value dari input
    let uang = document.getElementById("uang")
    let checkout = document.getElementById('checkout')
    let uangDariclient = parseInt(uang.value)
    // hitung total belanja
    let totalsemua = 0
    for (let item of Cart) {
        totalsemua += item.total()
    }

    let kembalian = uangDariclient - totalsemua

    // bandingkan uang dengan totalsemua
    if (uangDariclient < 0) {
        alert('jangan minus hey')
        checkout()
    } else if (isNaN(uangDariclient)) {
        alert('hey Anda masukin jumlah uangnya jangan dikosongin')
        checkout()
    } else if (uangDariclient < totalsemua){
        alert('uang tidak cukup')
        checkout()
    } else if (uangDariclient > totalsemua) {
        alert(`kembalian anda ${kembalian}`)
        reset()
    } else {
        alert('Terima kasih telah berbelanja')
        reset()
    }

}

function reset() {
    // reset semua kondisi
    Cart = []
    let buttondelcart = document.getElementsByClassName("delete_cart")
    let buttoncart = document.getElementsByClassName('cart_disabled')
    let buttoncetak = document.getElementById('cetak')
    buttoncetak.disabled = true
    for (let item of buttondelcart) {
        item.disabled = false
    }
    for (let item of buttoncart) {
        item.disabled = false
    }

    let receipt = document.getElementById('receipt')
    receipt.textContent = 'Receipt :'

    ShowCart()
    ShowProducts()
    uang.hidden = true
    checkout.hidden = true
}