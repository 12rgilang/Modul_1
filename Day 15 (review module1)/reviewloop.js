let start = ["a", "b", "c"]
let newStart = []
let i = 0
while(i < start.length){
    newStart.push(start[i])
    console.log(newStart)
    i++
}

let nums = [1, 2, 3, 4, 5]
let result = 0
for(let i=0; i < nums.length; i++){
    result += nums[i]
}

console.log(result)

let word = ""
for(let a=1; a<=5; a++){
    for(let b=1; b<=a; b++){
        word += "*"
    }
    word += "\n"
}
console.log(word)

let newWord = ""
for(let a=1; a<=5; a++){
    for(b=a; b<=5; b++){
        newWord += "*"
    }
    newWord += "\n"
}
console.log(newWord)

let rectangle = ""
for(a=1; a<=5; a++){
    for(let b=5; b>=1; b--){
        rectangle += "*"
    }
    rectangle += "\n"
}
console.log(rectangle)

console.log(Number("0284"))

let message = "Hello"
message += " world"

console.log(message)

let sum = 0
while(true){
    let value = 1
    if(sum === 5) break
    sum += value
}

console.log("Sum: " + sum)