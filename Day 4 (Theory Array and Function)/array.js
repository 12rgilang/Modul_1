

let students = ["gilang", "anjar", "alfa", "asfhi"]

console.log(students)
console.log(students[0]) // akan keluar inddex ke 0 dari array
//  untuk mengganti item dalam array

students[0] = "wakwaw" // merubah item ke 0 menjadi ke 1
console.log(students)

delete students[2] // menghapus value item ke 2 , tetapi masih terdapat item yang berisi empty item
console.log(students)

// Method
let hewan = ["Kodok", "katak", "semut"]
// Push --> digunakan untuk menambahkan data baur dalam aaray dan di 
//          simpan setelah index paling terakhir.
// Unshift --> menambahkan data baru sebelum index paling awal kebalikan dari Push
console.log(hewan)
hewan.push("jerapah", "babiiii") 
console.log(hewan)
hewan.unshift("Manusiaaaaaa")
console.log(hewan)

// pop --> digunakan untuk men-delete data di index paling akhir
// shift --> kebalikannya dari pop
hewan.pop()
console.log(hewan)
hewan.shift()
console.log(hewan)


// Splice memiliki beberapa parameter(index, totalDatatoDelete, dataToInsert)
let makanan = ["mi ayam", "pizza", "sate padang", "babi guling"]
// makanan.splice(1, 2) // merubah index pertama , dan mendelete total 2 index setelah index 1
// console.log(makanan)
// makanan.splice(2, 2, "kucing goreng", "kambing goreng") // // merubah index kedua ,sebanyak 2 data dan di insert value baru
// console.log(makanan)
makanan.splice(3, 1, "kambing guling")
console.log(makanan)
makanan.splice(1, 0 , "makanan baru")// menambahkan data sebelum index apa bila tidak ada yang di delete
console.log(makanan)

// add data manual x add data splice
let campus = ["BSD", "Jakarta", "Batam"]
campus.splice(1, 0, "Zimbabwe") // akan menambahkan item dibelakang jakarta
console.log(campus)
campus[10] = "babakan" // akan menambahkan item dengan empty array
console.log(campus)
console.log(campus[8])
campus[8] = "lippo"
console.log(campus)

// slice (startIndex, endIndex) --> end index tidak ikut diambil
let huruf = ["a", "b", "c", "d"]
huruf = huruf.slice(0,2) // maka akan mengambil huruf a-b saja
console.log(huruf)

// Includes & IndexOf
// Includes -->  Digunakan untuk mencari data
// IndexOf ---> digunakan untuk mencari polisi dari kita berada di index ke berapa
let minuman = ["air putih", "air minum", "air bening", "jus"]
console.log(minuman.includes("jus")) // case sensitive , jika tidak sesuai dengan kapital maka akan false
console.log(minuman.includes("air")) 

//concat menambahkan array selanjutnya
let arr = ["1", "2"], 
arr1 =  ["2", "4"]

console.log(arr.concat(arr1))

// split --> memisahkan dari string ke array
let world = "Hello saya"
console.log(world.split(" ")) // memisahkan dengan sepasi
console.log(world.split(""))// memisahkan setiap hurup yang tidak ada spasi
console.log(world.split("l"))

// array tiga dimensi
let arrayTigaDimensi = [[" Puwadhika", ["Digital", "School"]], 1, true, false]
//jika inngin mengambil kata digital, maka coednya
console.log(arrayDuaDimensi[0][1][0])