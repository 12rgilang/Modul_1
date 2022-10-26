//Loop Statement
//while
// while(condition){
// ..    
// }
// note: 
// While x Do While
// While ketika pertama kali program dijalankan, dia akan cek kondisi terlebih dahulu
// Do WHile akan jalan 1x ketika pertama kali program dijalankan
let init = 10
while(init < 10){ // disini terjadi apakah 1 < 10 ? true akan terus bekerja sampai bertemu false
    console.log("tambah terus")
    init++
}

//do while | untuk do while condition diletakkan pada while
let init1 = 3
do{
    console.log("ayam guleng")
    init1++
}while(init1 < 3)

// For Loop
for(let i=1; i <= 5; i++){ //i <= 5? true ---> 2 <= 5? true ---> 3 <= 5? true.... 6 <= 5? false 
    console.log(i) // 1 --> 2 --> 3...... --> 5
}


//Brake & Continue
//
// Case. Saya ingin mengecek value inputan dari user.
//      Apabila value nya mengandung huruf, maka langsung munculin error
let nomorHp = "0812abc"
for(let i=0; i < nomorHp.length; i++){ //  0 < 6? true --> 1 < 6 ? true -->true .......sampai false statement ketemu
    if(isNaN(nomorHp[i])){ // nomorHp[0] = 0? false sampai bertemu true.. mengapa i didalam hardbracket? karena berbentuk array
        console.log("Inputan salah")
        break;
    }
    console.log(nomorHp[i])// 0 --> 8 --> 1
}

for(let i=1 ; i <= 5; i++){
    console.log(i) // 1 --> 2 --> 3
    if(i === 3){
        break;
    } 
}

// Continue
for(let a=1; a < 6; a++){ // 1<6? True --> 2<6? true --> 3<6? true dst
    if(a === 2){ //1 === 2 ? false 2 === 2 ? true maka diskip karena 2 = 2 dilanjut ke angka 3
        continue
    }
    console.log(a)// 1 ---> 3 ---> 4
}