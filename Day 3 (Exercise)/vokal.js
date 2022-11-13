let input = "purwadhika", //// index dimulai dari 0
vokal = "aiueo", 
pointKata = 0

for(let i=0; i <= input.length-1; i++){ //// untuk .length dimulai dari 1
    for(let j=0; j <= input.length-1; j++){
        if(input[i] === vokal[j]){
        pointKata  = pointKata  + 1
        console.log(pointKata)
    }
   }
 }console.log(pointKata )