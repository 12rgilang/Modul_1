// menentukan palindrome
// // Katak
// let hewan = "baju"
// hewan = hewan.toLowerCase()
// let result = ""

// for(let i = hewan.length-1; 0 <= i; i--){
//    result += hewan[i] // diconcat atau ditambahkan
// }console.log(result)

// if(result == hewan ){
//    console.log("Palindrome")
// }else{
//    console.log("Not Palindrome")
// }

// // tentukan apakah jawaban siswa dan kunci jawaban sama

// let jawabanSiswa = "acdab"
// let kunciJawaban = "abdabasdasda"
// let point = 0

// for(let i = 0; i <= jawabanSiswa.length-1 ; i++ ){ // untuk iterasi dimulai dari 0 maka dikurang 1 kalo iterasi dimulai dari 1 tidak usah pake -1
//    if(jawabanSiswa[i] == kunciJawaban[i]){
//       point = point + 10
//    }else{
//       point = point - 5
//    }
// }console.log(point)

//buatlah sebuah program untuk menghitung jumlah huruf vokal pada suatu kata
//  let input = "Purwadhika", vokal = "aiueo", output = ""

// for(let i = 0; i < input.length; i++){
//      if(input[i] === vokal[i]){
//          console.log[i]
//         }
//      }

     let input = "purwadhika", //// index dimulai dari 0
     vokal = "aiueo", 
     pointKata = 0

     for(let i=0; i <= input.length-1; i++){ //// untuk .length dimulai dari 1
         for(let j=0; j <= input.length-1; j++){
             if(input[i] === vokal[j]){
             pointKata  = pointKata  + 1
             console.log(pointKata)
         }
        }
      }console.log(pointKata )



// let int = 10 , i = 1 ,num = 5

// for(let i = 1; i <= int; i++ ){
//      console.log(`${num} x ${i}`)
// }

// let cm = 100, km = cm / 100000

// console.log(`${cm} cm = ${km} Km`)

