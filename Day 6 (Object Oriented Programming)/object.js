// Object
let products = {
    name: "Mangga", // name disbut key || mangga disebut value || key+value disebut property
    price: 20000,
    stock: 10,
    origin: ["Mangga dua", "Mangga bersar", "Kelapa Dua"],
    getName: () => { //funciton di dalam object disebut METHOD6
        console.log("print nama")
    },
    getName1(){
        console.log(this.name) // hanya memanggil si key name
        console.log(this.origin[2])
    }
}
// console.log(products) // memanggil semua isi product
// console.log(products.name) // memanggil isi product yang memiliki key name
// console.log(products.price) // memanggil isi produck yang memiliki key price
// console.log(products["origin"][0]) // memanggil isi product yang mengandung key origin [0] untuk memanggil index ke 0
// products.getName() // memanggil function yang ada didalam prodcut
// products.getName1()

// products.name = "Apel Manis"
// console.log(products)

// delete products.name // digunakan untuk menghapus key & value (property)
// console.log(products)

// products.origin.shift() // menghapus value pertama
// console.log(products)

// For in loop
for (let key in products){
    console.log(key) // untik mendapatkan keynya saja
    console.log(products[key])
}

// optional Chaining --> Diguakan untuk memngakses nested property secara aman
let user = {
    addres: {
        street: "JAUUUH"
    }
}
console.log(user.addres) // apabila address tidak memiliki value maka akan jadi undefine
console.log(user.addres?.street) 