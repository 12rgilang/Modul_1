// Write a code to convert celsius to fahrenheit.
    // ● Write a code to check whether the number is odd or even
// ● Write a code to check whether the number is prime number or not
// ● Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
// ● Write a code to find factorial of a number.
// ● Write a code to print the first N fibonacci numbers.

//1.  Write a code to convert celsius to fahrenheit.
// program to convert celsius to fahrenheit
// ask the celsius valu e to the user prompt("Enter a celsius value: "); untuk html
// rumus fahrenheit = celsius * 1.8 + 32     
// tentukan suhu celcius
let celsius = 10
// calculate fahrenheit
let fahrenheit = (celsius * 1.8) + 32
// display the result
console.log(`${celsius} derajat celcius sama dengan ${fahrenheit} derajat fahrenheit.`);

// 2. buat array nomor 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.sort((a, b) => b % 2 - a % 2 || a - b);
    console.log(arr);

// 3. Write a code to check whether the number is prime number or not
// program to check if a number is prime or not

// take input from the user
// parseInt(prompt("Enter a positive number: ")); untuk html
let number = 7
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 bukan bilangan prima.");
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
    console.log("bukan bilangan prima.");
}

