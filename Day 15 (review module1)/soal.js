// 1.
/*
    let Halo = "Aku Tito"
    let halo = Halo.toUpperCase()
    console.log(Halo);
*/

// Apa hasil dari console.log tersebut? Karena javascript adalah sensitive case
// a. Perang Sticker
// b. AKU TITO
// x Aku Tito
// d. Error


// 2.
/*
    let a = "0"
    let b = Number(a)
    let hasil = a+b // "0" + 0
    console.log(hasil); "00"
*/

// Apa hasil dari console.log tersebut?
// a. undefined
// x 00
// c. NaN
// d. 0


// 3. 
/*
    let a = 3
    let b = 3
    if(a == b){
        console.log(a**3); 
    }else if(a === b){
        console.log(a**2); 
    }else{
        console.log("Ngaco");
    }
*/

// Console.log manakah yang akan dijalani?
// x 27
// b. 9
// c. "Ngaco"
// d. 3


// 4. 
/*
    function Babayo(num){
        if(2+1**1 === num){ // (3 === 3)
            return "Oyapohh"
        }else if(num == "3"){
            return "Aooo"
        }
    }
console.log(Babayo(3));
*/

// Hasil apa yang didapat dari function tersebut?
// a. Undefined
// x "Oyapohh"
// c. "Aooo"
// d. "Izin pipis"


// 5.
/*
    let a = [1, 3, 5, 6]
    let hasil = 0 // 1
    for(let i=0 ; i<a.length ; i++){
        if(hasil == 0){
            hasil+=a[i] 
        }else if(hasil != 0){
            hasil*=a[i]
        }
    } 
    console.log(hasil);
*/

// Agar value hasil tidak selalu bernilai 0 dan dapat menghasilkan hasil 90, maka kita harus mengisi baris kosong dengan?
// a. hasil == a[i]
// b. hasil *= a[i]
// x hasil += a[i]
// d. hasil /= a[i]


// 6. 
/*
    let huruf = ["A", "B", "C", "D", "E"]
    huruf = ...
    console.log(huruf);
*/

// Untuk mendapatkan hasil variable huruf [ 'A', 'B', 'C' ], maka kita akan memakai method apa?
// a. huruf.splice(0, 3)
// b. huruf.concat(0, 3)
// x huruf.slice(0, 3)
// d. huruf.delete(0, 3)


// 7. 
/*
    let a = [
        [{nama: "Masdef", Umur: 5}],
        {nama: "Tito", Umur: 12},
        {nama: "Ka Youke", Umur: 10}
    ]
*/

// console.log yang tepat untuk mendapatkan Umur 5 adalah
// a. console.log(a[0][0].umur);
// b. console.log(a[0][].umur);
// c. console.log(a[0][0][0].Umur);
// x  console.log(a[0][0].Umur);


// 8. 
// Sifat pada Queue adalah? Queue Ngantri
// a. VIVO
// b. TITO
// c. LIFO
// x  FIFO


// 9. 
// Method yang dapat membuat array baru adalah
// a. .forEach()
// b. .pilter()
// x  .map()
// d. .mep()


// 10.
// Yang merupakan bagian dari promise yang benar adalah kecwali?
// x  .finally() Tetap terhubung tetapi menghasilkan sukses atau error saja
// b. .then() Tetap terhubung tetapi menghasilkan sukses atau error saja
// c. .catch() Tidak terhubung samsek atau kendala server
// d. .finally() Selalu berjalan

// 10000000000000