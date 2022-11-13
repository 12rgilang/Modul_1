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