// cae Tentukan berat badan seseorang apakah ideal atau tidak, dengan ketentuan:
//      88 < 50 ---> Kurus Banget
//      88 < 70 ---> kurus aja
//      88 < 90 ---> cukup

let beratBadan = 90

if(beratBadan < 50){
    console.log("Kurus Banget")
}else if(beratBadan < 70){
    console.log("Kurus aja")
}else if(beratBadan <=90){
    console.log("cukup")
}

// / Exercise Nomer 5
//Math object fungsinya pembulatan ke bwawh
// Math.floor() ---> Fungsinya untuk pembulatan kebawah
// Math.ceil() ---> Fungsinya untuk pembulatan keatas
// Math.round() ---> Fungsinya untuk pembulatan sesuai aturan Matematika
// Step1. Menentukan variabel hari terlebih dahulu
let jmlh_hari = 4000
// Step2. Menentukan Tahun
let tahun = Math.floor(jmlh_hari / 365) 
console.log(tahun)
// Step3. Menentukan Bulan
let bulan = Math.floor(jmlh_hari % 365 / 30)
console.log(bulan)
// Step4. Menentukan Hari 
let hari = Math.floor(jmlh_hari % 365 % 30)
console.log(hari)
// Step5. Menggabungkan Tahun, Bulan dan Hari
console.log(`dari ${jmlh_hari} hari, terdapat ${tahun} tahun, ${bulan} bulan, dan ${hari} hari`)
