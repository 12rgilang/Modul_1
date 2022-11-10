// positive sum
// ex input: [1, 5, 100, -10, 0, -30]
//    output: 106
// let arr = 0
// let input = [1, 5, 100, -10, 0, -30]
// for(let i=0; i<input.length; i++){
//     if(input[i] > 0)
//     arr += input[i]
// }

// console.log(arr)

// with function
// function input(num){
// let arr = 0
// for(let i=0; i<num.length; i++){
//     if(num[i] > 0)
//     arr += num[i]
// }
// return arr
// }
// console.log(input([1, 5, 100, -10, 0, -30]))

// let arr = 0
// let input = [1, "abc", 100, -10, -0, -30]
// for(let i=0; i < input.length; i++ ){
//     if(isNaN(input[i])){
//         console.log("False")
//     }else{
//         arr += input[i]
//     }
// }
// console.log(arr)

// temukan angka kelipatan 5
// let arr = []
// let input = [1, 3, 10, 5, 100, 2, 8, 6]
// for(let i=0; i<input.length;i ++){
//     if(input[i] % 5 === 0)
//     arr.push(input[i])
// }

// console.log(arr)

// find total Space
//  input: "Jangan-jangan kamu adalah aku!"
//  output : "3space"

// let word = "Jangan-jangan kamu adalah aku!"
// let space = ""
// for(let i=0; i < word.length; i++ ){

// }
// space += word.split(" ").length-1
// console.log(`spasinya sebanyak ${space}`)

// cara cepat
// let word = "Jangan-jangan kamu adalah aku!"
// console.log(`${word.split(" ").length-1} spasi`)

// four chars
// create function to validate total character of string. total character Mustbe <10
//  ex Arg = "abc" --> return true
//  ex Arg1 = "PurwadhikaDigitalSchool" --> return false
//  ex Arg2 = "" --> return false

// function Validate(chars){
//     if(chars.length <= 0 || chars.length >= 10){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(Validate(""))

// remove "a" (create with function and looping)
//  ex argument = "Purwadhika" ---> purwadhik
//  ex argument = "hello" ---> hello
//  ex argument = "hai" ---> hi

function RemoveChar(char){
    let word = ""
    for(let i=0; i < char.length; i++){   
        if(char[i] !== "a" && char[i] !== "A"){
            word += char[i]
        }
    }
    return word
}

console.log(RemoveChar("purwadhika"))