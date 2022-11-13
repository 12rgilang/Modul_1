// 2. Write a function that takes an array of words and returns a string 
// by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
let specialChar = (char) => {
    let specialResult = char.split(" ")
    console.log(specialResult)

    let merge = specialResult.join(", " + "- " + "and ")
    return merge
}


console.log(specialChar("Gilang Ramadhan 12 Januari 1997"))