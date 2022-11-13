 // // 2. 
 function MaxRange(AngkaPertama, MAxRange, Range){
    let newArr = []
    for(i=AngkaPertama; i<=MAxRange; i+=Range){
        newArr.push(i)
    }

    return newArr
}
console.log(MaxRange(2,15,2))