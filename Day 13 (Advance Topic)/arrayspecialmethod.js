// .forEach() --> Tidak menghasilkan array baru. dia hanya sekedar looping
// parameter1 untuk mengambil masing-masing value dari dalam index
// parameter3 untuk mendapat index valuenya
let arr1 = ["Gilang", "Anjar", "Ashfi"]
let newArr1 = arr1.forEach((value, index) => {
    console.log(value)
    console.log(index)
})

// .map --> Menghasilkan array baru. sering digunakan untuk show data on page
let arr2 = ["WD", "UI/UX", "DM"]
let newArr2 = arr2.map((value, index) =>{
    return `${value}, ${index}`
})

console.log(newArr2)

// ex .map
let dataStudent = [
    {name: "Gilang", gender: "Pria"},
    {name: "Mutia", gender: "Wanita"},
    {name: "Tito", gender: "Pria"}
]

let newDataStudent = dataStudent.map(value => {
    if(value.gender === "Pria"){
        return `Mr. ${value.name}`
    }else{
        return `Mrs. ${value.name}`
    }
})

console.log(newDataStudent)


// .filter
// filter(function(currentValue, index, arr), thisValue)
// contoh indirect Function
let arrNum = [ 100, 200, 300, 50, 25, 0]
function Check(num){
    if(num > 50){
        return num
    }
}
let newArr = arrNum.filter(Check)
console.log(newArr)

// contoh Direct Function
let newArrNum = arrNum.filter((value) => {
    if(value > 50){
        return value
    }
})
console.log(newArrNum)


