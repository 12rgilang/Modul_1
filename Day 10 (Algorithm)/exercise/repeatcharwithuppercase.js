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

