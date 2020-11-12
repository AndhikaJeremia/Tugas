function CetakReceipt(index) {
    let receipt = document.getElementById("receipt")
    let output = "Receipt :"
    let total = 0
    for (let i = 0; i < Cart.length; i++) {
        output += `
        ${i + 1}. ${Cart[i].name} x ${Cart[i].quantity} = ${Cart[i].total()} <br>
        `
        total += Cart[i].total()
    }
    output += `<br> Total belanja : Rp ${total}`
    receipt.innerHTML = output
    let button = document.getElementsByClassName("delete_cart")
    for (let i = 0; i < button.length; i++) {
        button[i].disabled = true
    }
    let buttoncart = document.getElementsByClassName('cart_disabled')
    // bentuk looping kedua
    for (let item of buttoncart) {
        item.disabled = true
    }

    // show checkout
    let uang = document.getElementById('uang')
    let checkout = document.getElementById('checkout')
    uang.hidden = false
    checkout.hidden = false
}