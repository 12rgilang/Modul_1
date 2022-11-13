//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
let integer = (arr1, arr2) => {
    let a = arr1[0]
    let b = arr2
    let sum = 0
    let output = []
    for(let i=0; i<=a.length; i++){
                sum = a[i] + b[i]
                output.push(sum)
                console.log(output)
            }
            return output
        }
    

console.log(integer([1,2,4,5,6[1,2,3,4,5,6]]))