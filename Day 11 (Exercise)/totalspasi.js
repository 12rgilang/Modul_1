// find total Space
//  input: "Jangan-jangan kamu adalah aku!"
//  output : "3space"

let word = "Jangan-jangan kamu adalah aku!"
let space = ""
for(let i=0; i < word.length; i++ ){

}
space += word.split(" ").length-1
console.log(`spasinya sebanyak ${space}`)

// cara cepat
let word1 = "Jangan-jangan kamu adalah aku!"
console.log(`${word1.split(" ").length-1} spasi`)