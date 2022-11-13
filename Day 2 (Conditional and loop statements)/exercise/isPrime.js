// 3. Write a code to check whether the number is prime number or not
// program to check if a number is prime or not

let number = 17
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log(" 1 bukan bilangan prima.");
}
// check if number is greater than 1
else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} adalah bilangan prima`);
    } else {
        console.log(`${number} bukan bilangan prima`);
    }
}

// check if number is less than 1
else {
    console.log("bukan angka");
}


// contoh dari ka ryan
// for(let i=2; i <= number-1; i++){
//     if(number % i === 0){
//         console.log("Not Prime")
//         break;
//     }
//     if(i === number-1){
//         console.log("is Prime")
//     }
// }