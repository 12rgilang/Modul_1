// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         var smallest = 0

//         for(let j=i+1; j<arr.length; j++){
//             console.log(arr[j])
//             if(arr[i] > arr[j]){
//                 if(arr[j] < smallest || smallest === 0){
//                     smallest = arr[j]
//                 }
//             }

//             arr[j] = arr[i]
//         }
//         arr[i] = smallest
//     }

//     return arr
// }

// console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]))

// function selectionSort(arr) {
//     let min;
//     for (let i = 0; i <arr.length; i++) {
//         min = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) min = j;
//         }

//         if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//     return arr;
// }
// console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));

selection = arr =>{
    let a = 0
    let b = 0
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++)
        if(arr[i]>arr[j]){
            a = arr[i]
            b = arr[j]
            arr[i] = b
            arr[j] = a
            i=0
            j=i+1
        }
    }
    return arr

}

console.log(selection([29,72,98,13,87,66,52,51,36]))