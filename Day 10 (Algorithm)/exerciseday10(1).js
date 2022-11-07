
// 1. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the words length is even, return the middle 2 characters
// getMiddle(test) should return "es" 
// getMiddle("testing") should return "t" 
// getMiddle("middle") should return "dd" 
// getMiddle("A") should return "A"

// buat variable yang menampung data tersebut
// kemudian ubah menjadi string dan bagi dua string tersebut
// function MiddleWord(name)
// {
//   let str = Math.floor(name.length / 2);
//   let result = name[str]
//   if(name.length % 2 === 0 && str > 0) {
//     result = name[str-1] + result;

//   }
//   return result;
// }


// console.log(MiddleWord("gilang ramadhan"))

// This time no story, no theory. The examples below show you how to write

// function accum(input){

//    let newInput = input.split("")
//    let newWord = []

//     for(let i=0; i < newInput.length; i++){
//         newWord.push(newInput[i].toUpperCase() + Array(i + 1).join(newInput[i].toLowerCase()))
//     }
//     return newWord.join("-")
// }
// console.log(accum("abcdef"))

// cara ka ryan
function RepeatChar(str){
    let result = ""

    for(let i=0; i<str.length; i++){
        result += str[i].toUpperCase()
        result += str[i].repeat(i).toLowerCase()
        result += "-"
    }

    return result.slice(0, result.length-1)
}

console.log(RepeatChar("abcdef"))
// console.log(accum("abcd"))
// example :

    // accum("abcd")->"A-Bb-Ccc-Dddd" 
    // accum("RqaEzty")-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
    // accum("cwAt")-> "C-WW-Aaa-Tttt

