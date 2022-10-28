// Function
// sebuah baris program uang disimpan ke dalam suatu tempat
// DRY theory (Dont Repeat your self)

// Tahapan membuat function
// 1. Build
// 2. Call

// syntax:
// 1. Function Declaration ---> Bisa dipinggal sebelum function di build
Print() // hoisting 
function Print(){
    console.log("Hello world")
}

//  2. Function Expression ---> tidak bisa dipanggil senbelum function di build
// anonymus function
let PrintProgram = function(){
    console.log("ayam guleng")
}
PrintProgram()

// Arrow Function, sama dengan expression karena harus di declare dengan variable, anonymus function dapat diiis dengan parameter
let newProgram = () => {

}

// Function with Parameters & Arguments
// parameter itu bisa lebih dari 1 dan penamaan bebas
function Calculator(input1, input2, input3, input4, input5, input6){ // input 1 dan input 2 disebut Parameters
    console.log(input1 + input2)
    console.log(input3 * input4)
    console.log(input5 / input6)
}

Calculator(20,10, 
            30, 5,
            900, 5) // 20, 10 ---> disebut Arguments


function DataDiri(nama, umur, rumah){
    console.log(`${nama}, ${umur}, ${rumah}`)
}
DataDiri("Gilang", 25, "Jauh")

// function with Result
// 1. Function yang hanya menjalankan sesuatu (console.log)
// 2. Function yang menghasilkan sesuatu (return, hasil dari return akan digunakan kembali nantinya pada variable selanjytnya)

function Validation(phoneNumber){
    // Memvalidasi phone number agar inputan user murni angka semua
    if(phoneNumber.toString().length > 13){
    return false
}

    if(isNaN(phoneNumber)){
        return false
    }else{
        return true
    } 
}

let result = Validation(1221)

if(result){
    console.log(" Data Sudah Benar! Register succsec")
}else{
    console.log("Data salah !")
}