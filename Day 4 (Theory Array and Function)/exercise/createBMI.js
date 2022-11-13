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


function BmiCalculator(berat, tinggi){
    let formula = berat / Math.pow((tinggi/100),2)
    if(formula < 18.5){
        return "less weight"
    }else if(formula < 24.9){
        "ideal"
    }else if(formula < 29.9){
        "Overweight"
    }else if(formula < 30.9){
        "Very Overweight"
    }else{
        return "obesity"
    }
}


let result = BmiCalculator(12, 100)

console.log(result)