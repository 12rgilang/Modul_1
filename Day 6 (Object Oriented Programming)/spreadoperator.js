// ... --> spread operator dadpat disebut mencopy value dari property
// spread operator hanya dapat digunakan pada array dan object
//merubah array menjadi Immutable menggunakan spreadoperator
let arr1 = ["Gilang","Aswin","Anjar"]
let arr2 = [...arr1] // ... disebut spread operator
arr2[1] = "Ashfi"
console.log(arr1)
console.log(arr2)

//merubah object menjadi immutable menggunakan spreadoperator
let obj1 = {name: "gilang"}
let obj2 = {...obj1}
obj2.name = "Ramadhan"
console.log(obj1)
console.log(obj2)

// Destructuring Assignment
// ... spreadoperator digunakan untuk encopy value dari variable diatasnya
let arrData = ["Gilang", "Ramadhan", 1997]

let [a, b, c] = [...arrData] // let [a,b,c] = variable let a, let b, let c
console.log(c)

