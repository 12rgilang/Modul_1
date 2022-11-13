// four chars
// create function to validate total character of string. total character Mustbe <10
//  ex Arg = "abc" --> return true
//  ex Arg1 = "PurwadhikaDigitalSchool" --> return false
//  ex Arg2 = "" --> return false

function Validate(chars){
    if(chars.length <= 0 || chars.length >= 10){
        return false
    }else{
        return true
    }
}

console.log(Validate("abc"))