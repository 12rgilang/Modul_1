// exercise number 5
// Write a function to split a string and convert it into an array of words 
// ○ Example : “Hello World” → [“Hello”, “World”]
// Split
let split = (text) => {
    let splitResult = text.split(" ")

    console.log(splitResult)
}
split("Hello world")

let specialChar = (char) => {
    let specialResult = char.split(" ")
    console.log(specialResult)

    let join = specialResult.join(", ")
    return join // return hanya menyimpan belum mendeklarasi

}
console.log(specialChar("Gilang anjar vero"))
module.exports = {split, specialChar}