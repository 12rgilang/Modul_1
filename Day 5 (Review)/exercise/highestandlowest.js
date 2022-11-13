//1.  Write a function to get the lowest, highest and average value in the array (with and without sort function).
function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return [max, min, avg];
}
console.log(maxMinAvg([1,2,3,4,5,6,7,8,9,10,-1,-10, 0 ]).toString())