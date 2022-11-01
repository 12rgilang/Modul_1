// array of object
let products = [
    {name: "Jeruk", Price: 10000, stock: 10},
    {name: "duren", Price: 15000, stock: 15},
    {name: "cerry", Price: 20000, stock: 20},
]

let word = `Purwadhika Mart \n`

// console.log(products[0]) // akan memanggil products index ke 0
for(let i=0; i < products.length; i++){
    word += `${i+1}. ${products[i].name} | Harga Rp. ${products[i].Price.toLocaleString()} | Stocknya: ${products[i].stock} \n`
}
console.log(word)