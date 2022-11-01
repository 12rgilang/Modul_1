
// // arrow Function
// let newProgram = (nama, asal, umur) => { // didalam kurung adalah parameter
//     console.log (` Halo nama saya,${nama}, asal dari ${asal}, umur saya ${umur} `)
// }

// newProgram("gilang", "tangerang", 25) // yang didalam kurung adalah argument
// // parameters mengambil value dari arguments  

// // Function with default Parameter
// let greeting = (nama = "Username") => {
//     console.log(`${nama}`)
// }

// greeting()

//function with Rest Parameters
// let myfunc = (a,b, ...manyMore) => {
//     console.log(a)
//     console.log(b)
//     console.log(manyMore)
//     console.log(manyMore[0] + " " +  manyMore[1]) // mengambil arguments index ke 0 dan ke1
// }
// myfunc("Makan", "Minum", "Mandi", "wajib")

// let getMessage = () => {
//     let message = () => {  // jika ingin memangil nested function yang ini harus didalam scope
//         console.log("Pesan baru")
//     }
//     message() // jika nested function ingin dipanggil maka harus function dipanggilnya didalam scope
//     console.log("Pesan yang pertama tercetak")
// }

// getMessage()


// // closeure Function
// // inner Function yang dapat mengakses variable daro outer functionnya
// let panggil = () => {
//     let name = "gilang" 

//     let cetak = () => {
//         console.log(`Hello, ${name}`)
//     }

//     cetak() // ini untuk memanggil function cetak, apabila function ini tidak dipanggil maka function keseluruhan tidak akan berjalan
// }
// panggil()

//Recursive function // function yang memanggil dirinya sendiri
let countDown = (num) => {
    console.log(num) 

    num-- // pengurangan num

    if(num > 0){
        countDown(num)
    }
}
countDown(3)

let angka = 10

countDown(angka)