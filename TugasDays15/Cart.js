function ShowCart() {
    let table = document.getElementById("cart")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""
    for (i = 0; i < Cart.length; i++) {
        tr += `
        <tr>
            <td>${i + 1}</td>
            <td>${Cart[i].name}</td>
            <td> <img src="${Cart[i].img}" width="50px"> </td>
            <td>${Cart[i].harga}</td>
            <td>${Cart[i].quantity}</td>
            <td>${Cart[i].total()}</td>
            <td><button class="delete_cart" onclick="onButtonDeleteCart(${i})">Delete</button></td>
        </tr>
    `
    }

    tbody.innerHTML = tr
}

function onButtonDeleteCart(index) {
    let idxproduk = dataProduk.findIndex((item) => item.name === Cart[index].name) 

    //  pake cara inibisa
    // for (let i = 0; i< dataProduk.length; i++){
    //     if (dataProduk[i].name === Cart[index].name){
    //         idxproduk = i
    //         console.log(idxproduk)
    //     }
    // }
    console.log(idxproduk)

    if (Cart[index].quantity <= 1) {
        Cart.splice(index, 1)
    } else {
        Cart[index].quantity -= 1
    }
    dataProduk[idxproduk].stok += 1

    let buttoncetak = document.getElementById('cetak')
    if (Cart.length === 0){
        buttoncetak.disabled = true
    }
    ShowCart()
    ShowProducts()
}
