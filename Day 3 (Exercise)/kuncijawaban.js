// // tentukan apakah jawaban siswa dan kunci jawaban sama

let jawabanSiswa = "acdab"
let kunciJawaban = "abdabasdasda"
let point = 0

for(let i = 0; i <= jawabanSiswa.length-1 ; i++ ){ // untuk iterasi dimulai dari 0 maka dikurang 1 kalo iterasi dimulai dari 1 tidak usah pake -1
   if(jawabanSiswa[i] == kunciJawaban[i]){
      point = point + 10
   }else{
      point = point - 5
   }
}console.log(point)