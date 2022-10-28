// logical operator 
// OR ||
// 1. Aapabila salah satu kondisi bernilai true, , maka hasil akhir akan true
// 2. apabila ingin kondisi akhir bernilai false, maka kedua kondisi harus sama-sama false
console.log(false || false) 
console.log(13<100 || 100 > 10) // true || true makaa hasilnya true
console.log(100>1 || 100<1 ) // true || false maka hasilnya true

// AND &&
// 1. Apabila salah satu kondisi bernilai false, maka hasilnya false
// 2. Apabila ingin hasilnya bernilai true, makaharus true semua
console.log(100<101 && 100==100) // True || True maka hasilnya True
console.log(1>5 && 5<10) // false || True maka hasilnya False

// NOT !
// kebalikan dari NOR NAND
console.log(!(100 == 100 || 2 < 5)) //hasil seharusnya true tapi karena not maka di negasikan.