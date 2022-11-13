// menentukan palindrome
// Katak
let hewan = "baju"
hewan = hewan.toLowerCase()
let result = ""

for(let i = hewan.length-1; 0 <= i; i--){
   result += hewan[i] // diconcat atau ditambahkan
}console.log(result)

if(result == hewan ){
   console.log("Palindrome")
}else{
   console.log("Not Palindrome")
}

// Cara codewars
const isPalindrome = (x) => {
   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
 }