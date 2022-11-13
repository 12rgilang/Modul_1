// exercise number 5
// Write a function to split a string and convert it into an array of words 
// ○ Example : “Hello World” → [“Hello”, “World”]
// Split
let split = (text) => {
    let arr = []
    let splitResult = text.split(" ")
    arr.push(splitResult)

    return arr
}

// let specialChar = (char) => {
//     let arr1 = []    
//     let specialResult = char.split(" ")
//     console.log(specialResult)

//     let join = specialResult.join(", ")
//     arr1.push(join)
    
//     return arr1 // return hanya menyimpan belum mendeklarasi

// }
console.log(specialChar("Gilang anjar vero"))

module.exports = split