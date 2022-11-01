//1.  Write a function to get the lowest, highest and average value in the array (with and without sort function).
function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return [max, min, avg];
}
console.log(maxMinAvg([1,2,3,4,5,6,7,8,9,10,-1,-10,0 ]))

// 2. Write a function that takes an array of words and returns a string 
// by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
let specialChar = (char) => {
    let specialResult = char.split(" ")
    console.log(specialResult)

    let merge = specialResult.join(", " + "- " + "and ")
    return merge
}


console.log(specialChar("Gilang Ramadhan 12 Januari 1997"))

//Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

let split = (text) => {
    let splitText = text.split(" ")
    console.log(splitText)
}
console.log(split("Hellow World, Nama saya Gilang Ramadhan"))

//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
let integer = (arr1, arr2) => {
    let a = arr1[0]
    let b = arr2
    let output = ''
    for(let i=1; i<=arr1; i++){
        for(let j=1; j<=i; j++){
            if( a[i] == i[j]){
                output += a + b
                console.log(output)
            }
        }
        output='';
    }
}
integer([1,2,4,5,6[1,2,3,4,5,6]])