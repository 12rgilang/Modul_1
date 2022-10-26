console.log("Hello World");
// semicolon berguna untuk meisahkan antar statement.
console.log("Hello Saya dari Purwadhika.")

// Variable declaration
var makanan // makanan disini sebagai declaration variable
makanan = "bubur ayam" // Assign value (memanggil data variable diatas)
console.log(makanan)

console.log("ayam")


//  Var diperboleh membuat variable dengan nama yang sama
// .... dan tidak mengenal scope

// let tidak diperbolehkan membuat variable dengan nama yang sama
// .... mengenal scope

// const mirip dengan let, hanya saja value nya constat.

let kerja = "Software Developer"
kerja = "Front end" //override
console.log(kerja)

// Variable Rules
// 1. penamaan variable harus spesifik
// 2. Karakter pertama yang diperbolehkan: huruf, $ , _
// 3. syntax JavaScript tidak diperbolehkan dalam penamaannya
// 4. Apabila nama var lebih dari 1 kata, maka dihubungkan dengan _ atau camelCase
// 5. CaseSensitive --> apabila berbeda case/capslocknya maka akan berbeda syntax.

// tipe data: String (".."/'..'/`...`)
let namaStudent = "Gilang"
console.log(typeof namaStudent) //string
// String litteral using $ sign
let namaDepan = "Gilang"
let description = `Saya ${namaDepan}, saya sedang belajar di Purwadhika`
console.log(description)

//type data Number
let utang = 100000 //integer
let utangSaya = 1.000 //float
console.log(typeof utangSaya)

// Modulus ---> hasil sisa bagi
console.log(10%3) // 1
console.log(15%3) // 0

//operator
let num1 = 2
let num2 = 5
let num3 = "Umur saya"
console.log(num3 + num1 + num2 ) // pada javascript string akan digabungkan dengan integer

let n = 10
n *= 10
console.log(`n ${n}`) // n x n 

let counter = 1
counter++ //Increment
counter** // counter *= 1
counter-- //Decrement 

//prefix : akan mendapatkan value setelahnya
let preCounter = 20
console.log(++preCounter);
// postfix: akan mendapatkan value sebelumnya 
let postCounter = 11
console.log(postCounter++) // menunjukkan 11 aslinya sudah ditambahkan 1 menjadi 12
postCounter++ // menunjukkan 13
console.log(postCounter++) // menunjukkan 13 aslinya sudah ditambahkan 1 menjad 14
postCounter++// menunjukkan 15
console.log(postCounter) //di panggil postCounter terakhir.

// type data : Date
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())

//type data: Boolean (True / False)
let benar = true
let salah = false
console.log(typeof benar)
console.log(typeof salah)
console.log(benar)
console.log(salah)

// undifined dan null
//undifined biasanya apabila variable belum ditentukan.

//mutable & Immutable
// mutable sebuah tipe daya yang value nya dapat diubah ketika dicopy (array & object)
let arr1 = [1, 2, 3] // data array
let newArr1 = arr1
newArr1[0] = 100 // merubah urutan array dalam index value ke 0 menjadi 100 (1 --> 100)
console.log(arr1)
console.log(newArr1)


//immutable : sebuah tipe data yang valuenya tidak dapat diubah ketika di copy (string, number, dll)/
let nama = "Gilang"
let newNama = nama
newNama = "Gilang Ramadhan"
console.log(nama)
console.log(newNama)


