let products = {
    name: "Umbrella",
    price: 125000,
    variant: [
        {
            color: "Purple"
        },
        {
            color: "Blue"
        }
    ]
}

let saveJSON = JSON.stringify(products) // untuk merubah dari object kedalam JSON
console.log(saveJSON)
saveJSON = JSON.parse(saveJSON) // untuk merubah dadri JSON kedalam object Javascript
console.log(saveJSON)