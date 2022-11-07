// // class
// digunakan untuk membuat sebuah object dengan nama key yang seragam
// class itu cetakan untuk membuat object


// class Products { //jika menggunakan class declaration menggunakan huruf besar pada pertama
//     name = "";
//     price =  0;
//     stock = 0;

//     constructor(name, price, stock){
//         this.name = name,
//         this.price = price,
//         this.stock = stock
//     }
// }

// // let product1 = new Products("Mangga", 10000, 10)
// // console.log(product1)
// // let product2 = new Products("Leci", 12000, 20)
// // console.log(product2)

// //apabila memilki data yang banyak bisa menggunakan array, maka akan dimasukkan kedalam adata paling atas
// let arrProducts = [
//     new Products("Kurma", 100000, 10),
//     new Products("manggis", 2000, 21)
// ]
// console.log(arrProducts) // akan memanggil isi dari arr products
// for(let i=0; i < arrProducts.length; i++){
//     console.log(`Rp. ${arrProducts[i].price.toLocaleString()}`) // untuk memanggil harga
// } 


// // Inheritance ---> Pewarisan property
// //Buah
// // 1. Nama, Harga, stok, berat, warna, satuan
// // Elektronik
// // 1. Nama, Harga, stok, berat, warna, satuan, merk, ukuran
// // pakaian
// // 1.Nama, Harga, stok, berat, warna, satuan

// // apabila memiliki properti yang sama maka menggunakan class inheritance

// // bahasa ppembacaan dari extends  , class child ingin mengambil dari class parent

// class NewProdutcs{ // disebut parents
//     nama = "";
//     harga = 0;
//     stok = 0;
//     warna = "";

//     constructor(nama, harga, stok, warna ){
//         this.nama = nama,
//         this.harga = harga,
//         this.stok = stok,
//         this.warna = warna
//     }
// }
// class Buah extends NewProdutcs{ //buah
//     berat = 0;
//     satuan = "";

//     constructor(nama, harga, stok, berat, warna, satuan){ //
//         super(nama, harga, stok, warna)
//         this.berat = berat,
//         this.satuan = satuan
//     }
// }

// let buah1 = new Buah("Apel", 1000, 10, 1, "Merah", "Kg")
// console.log(buah1)

// class Elektronik extends NewProdutcs{ //buah
//     berat = 0;
//     satuan = ""

//     constructor(nama, harga, stok, berat, warna, satuan){
//         super(nama, harga, stok, warna)
//         this.berat = berat,
//         this.satuan = satuan
//     }
// }

// let televisi = new Elektronik("panasonic", 1000000, 1, 5, "silver", 1)
// console.log(televisi)

// class Pakaian extends NewProdutcs{ //buah   
//     berat = 0;
//     vendor = ""

//     constructor(nama, harga, stok, berat, warna, vendor){
//         super(nama, harga, stok, warna)
//         this.berat = berat,
//         this.vendor = vendor
//     }
// }

// let baju = new Pakaian("T-Shirt", 250000, 1, 200+"gr ", "Black", "H&M")
// console.log(baju)

// //Public & Private Property
// class user{
//     name = ""; // Public Property
//     #email = ""; //private Property karena menggunakan #

//     constructor(name, email){
//         this.name = name,
//         this.#email = email // email di hidden
//     }
// }

// let user1 = new user("Gilang", "gilang.ramadhan011297@gmail.com")
// console.log(user1)

// // Encapsulation
// // untuk penggunaan Data Hiding ,Increased Flexibility, Reusability , Testing code is easy
// // Getter & Setter
// // Getter
// class User1{
//     name = ""; // Public Property
//     #email = ""; //private Property karena menggunakan #

//     constructor(name, email){
//         this.name = name,
//         this.#email = email // email di hidden namun dapat di ambil dengan Getter
//     }
//     getEmail(){ // Getter --> untuk mengambil data khusunya data private atau data yang ingin dimodifikasi terlebih dahulu
//         let modified = `******${this.#email.slice(6, this.#email.length)}`
//         return modified
//     }
// }

// let user2 = new User1("Gilang", "gilang.ramadhan011297@gmail.com")
// console.log(user2.getEmail())

// // Setter 
// class User1{
//     name = ""; // Public Property
//     #email = ""; //private Property karena menggunakan #

//     constructor(name){
//         this.name = name
//         // this.#email = email // email di hidden namun dapat di ambil dengan Getter
//     }

//     get getEmail(){ // Getter --> untuk mengambil data khusunya data private atau data yang ingin dimodifikasi terlebih dahulu
//         if(this.#email.length !==0){
//         let modified = `******${this.#email.slice(6, this.#email.length)}`
//         return modified
//     }else{
//         return "Email tidak ada"
//     }
// }

//     set saveEmail(email){
//         if(!email.includes("@")){
//             console.log("Email not Valid!")
//         }else{
//             this.#email = email
//         }
//     }
// }

// let user2 = new User1("Gilang")
// user2.saveEmail = "gilang.ramadhan011297gmail.com"
// console.log(user2.getEmail)
// console.log(user2)

// // Static properties
// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//         return 'static method has been called.';
//     }
// }
// console.log(ClassWithStaticMethod.staticProperty);
// // output: "someValue"
// console.log(ClassWithStaticMethod.staticMethod());
// // output: "static method has been called."