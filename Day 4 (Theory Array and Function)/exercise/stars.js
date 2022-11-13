let star =''
let number = 1
for(let i=1; i<=3; i++){
    for(let j=1; j<=i; j++){
        star += number
        number++
    }
    star += '\n'
}
console.log(star)


// // Reverser Stars
let star1 =''
let number1 = 1
for(let i=10; 1 <= i; i--){
    for(let j=1; j<=i; j++){
        star1 += "*"
        number1++
    }
    star1 += '\n'
}
console.log(star1)