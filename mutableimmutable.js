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