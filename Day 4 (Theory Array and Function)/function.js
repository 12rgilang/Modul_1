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
let newProgram = (nama, asal, umur) => {
    console.log (` Halo nama saya,${nama}, asal dari ${asal}, umur saya ${umur} `)
}

newProgram("gilang", "tangerang", "25")

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

function Validation(phoneNumber){ //phoneNumber itu parameters
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

let result = Validation(1221) // 12221 ini disebut arguments

if(result){
    console.log(" Data Sudah Benar! Register succsec")
}else{
    console.log("Data salah !")
}

// Function with default Parameter
let greeting = (nama = "Username") => {
    console.log(`${nama}`)
}

greeting()// ketika argument tidak diisi maka akan terisi oleh ddefault parameter

//function with Rest Parameters
let myfunc = (a,b, ...manyMore) => {
    console.log(a)
    console.log(b)
    console.log(manyMore)
    console.log(manyMore[0], + manyMore[1]) // mengambil arguments index ke 0 dan ke1
}
myfunc("Makan", "Minum", "Mandi", "wajib") 

//Nested Function == function didalam function
let getMessage = () => {
    let message = () => {  // jika ingin memangil nested function yang ini harus didalam scope
        console.log("Pesan baru")
    }
    message() // jika nested function ingin dipanggil maka harus function dipanggilnya didalam scope
    console.log("Pesan yang pertama tercetak")
}

getMessage()


// closeure Function
// inner Function yang dapat mengakses variable daro outer functionnya
let panggil = () => {
    let name = "gilang"

    let cetak = () => {
        console.log(`Hello, ${name}`)
    }

    cetak() // ini untuk memanggil function cetak, apabila function ini tidak dipanggil maka function keseluruhan tidak akan berjalan
}
panggil()


//Recursive function // function yang memanggil dirinya sendiri
let countDown = () => {
    console.log(num) 

    num-- // pengurangan num

    if(num > 0){
        countDown(num)
    }
}
countDown(3)