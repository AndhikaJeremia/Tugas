let dataProduk = [
    {
        id: 1,
        name: "iPhone 12",
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg",
        harga: 23000000,
        stok: 12
    },
    {
        id: 2,
        name: "Samsung Galaxy Note 20",
        img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-1.jpg",
        harga: 22500000,
        stok: 20
    },
    {
        id: 3,
        name: "Google Pixel 5 5G",
        img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg",
        harga: 8960000,
        stok: 5
    },
    {
        id: 4,
        name: "OnePlus 8T",
        img: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-1.jpg",
        harga: 6578000,
        stok: 8
    }
]

// class untuk bikin object produk
class Produk {
    constructor(id, name, img, harga, stok) {
        this.id = id,
        this.name = name,
        this.img = img,
        this.harga = harga,
        this.stok = stok
    }
}
let Cart = []
class CartData {
    constructor(id, name, img, harga, quantity, total) {
        this.id = id,
            this.name = name,
            this.img = img,
            this.harga = harga,
            this.quantity = quantity
    }
    total = function (params) {
        return this.quantity * this.harga
    }

}
