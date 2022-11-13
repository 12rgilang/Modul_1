// number 2 
// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 􏰃 with "Fizz", multiples of 􏰅 with "Buzz", multiples of 􏰃 and 􏰅 with "FizzBuzz".
// ● Parameters : n → total looping

let fizzBuzz = (n) => {
    let arr = []
    for(let i=1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz")
        }else if(i % 5 === 0){
            arr.push("Buzz")
        }else if(i % 3 === 0){
            arr.push("fizz")
        }else{
            arr.push(i)
        }
    }
    return arr
}

module.exports = fizzBuzz

// codewars 
// // function fizzify(i) {
//   if (i % 15 == 0)
//   return 'FizzBuzz';
// else if (i % 5 == 0)
//   return 'Buzz';
// else if (i % 3 == 0)
//   return 'Fizz';
// else
//   return i;
// }

// // Return an array
// function fizzbuzz(n) {
// var res = [];
// for (var i = 1; i <= n; ++i) res.push(fizzify(i));
// return res;
// }