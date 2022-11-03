// Create BMI 
// Formula BMI = weight(kg) / (height(meter)) **
// Parameters weight & height
// Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

// BMI and parameters


// function BmiCalculator(berat, tinggi){
//     let formula = berat / Math.pow((tinggi/100),2)
//     if(formula < 18.5){
//         return "less weight"
//     }else if(formula < 24.9){
//         "ideal"
//     }else if(formula < 29.9){
//         "Overweight"
//     }else if(formula < 30.9){
//         "Very Overweight"
//     }else{
//         return "obesity"
//     }
// }


// let result = BmiCalculator(12, 100)

// console.log(result)

// ● Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

// let pyramid = (height) => {
//     let output = '';
//     for(let i=1; i<=height; i++){
//         for(let a=1; a<=i; a++){
//             output += a + ' ';
//         }
//         console.log(output);
//         output = '\n';
//     }
// }
// pyramid(10)



// let star =''
// let number = 1
// for(let i=1; i<=3; i++){
//     for(let j=1; j<=i; j++){
//         star += number
//         number++
//     }
//     star += '\n'
// }
// console.log(star)


// // Reverser Stars
// let star =''
// let number = 1
// for(let i=10; 1 <= i; i--){
//     for(let j=1; j<=i; j++){
//         star += "*"
//         number++
//     }
//     star += '\n'
// }
// console.log(star)

//triangle patern
//setiap perbedaan i dan j selisih 3, karena index dimuali dari 0
let star =''
for(let i=12; 0 <= i; i--){
    for(let j=0; j <= 15; j++){
       if(j >= i && j <= 15-i){
           star += "*"
       }else{
           star += '-'
       }
    }
    star += '\n'
}
console.log(star)

// exercise number 5
// Write a function to split a string and convert it into an array of words 
// ○ Example : “Hello World” → [“Hello”, “World”]
// Split
// let split = (text) => {
//     let splitResult = text.split(" ")

//     console.log(splitResult)
// // }
// // split("Hello world")

// let specialChar = (char) => {
//     let specialResult = char.split(" ")
//     console.log(specialResult)

//     let join = specialResult.join(", ")
//     return join // return hanya menyimpan belum mendeklarasi

// }
// console.log(specialChar("Gilang anjar vero"))

// number 2 
// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 􏰃 with "Fizz", multiples of 􏰅 with "Buzz", multiples of 􏰃 and 􏰅 with "FizzBuzz".
// ● Parameters : n → total looping

// let fizzBuzz = (n) => {
//     for(let i=0; i <= n; i++){
//         console.log(i)
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         }else if(i % 5 === 0){
//             console.log("Buzz")
//         }else if(i % 3 === 0){
//             console.log("fizz")
//         }
//     }
// }
// fizzBuzz(20)

// Case. Buatlah program untuk menjumlahkan setiap angka kelipatan 3 ataupun 5 kedalam sebuah variable
// ex n-looping =10 --> output =?
//    n-lopping =4 ---> ouput =3

// let loopingNum = (n) => {
//     let total = 0
//     for(let i=0; i <= n; i++){
//         if(i % 3 ===0 ){
//             total += i
//         }
//     }
//     return total
// }

// console.log(loopingNum(10))

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// let myArray = [1,3,5,7,9,2,4,6,8,9,10]
// let it = myArray.length

//     for(let i = 0; i < it; i++) {
//         for(let j = 0; j < myArray.length; j++ ) {
//         if(myArray[j] % 2 === 1) {
//         myArray.splice(j,1)
//         break
//     }
//   }
// }

// console.log(myArray)

