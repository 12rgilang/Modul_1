// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
let myArray = [1,3,5,7,9,2,4,6,8,9,10]
let it = myArray.length

    for(let i = 0; i < it; i++) {
        for(let j = 0; j < myArray.length; j++ ) {
        if(myArray[j] % 2 === 1) {
        myArray.splice(j,1)
        break
    }
  }
}

console.log(myArray)

