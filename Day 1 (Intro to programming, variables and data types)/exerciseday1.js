// Write a code to find area of rectangle. s= 5 mencari Luas
// ● Write a code to find perimeter of rectangle. s=5 mencari keliling
// ● Write a code to find diameter, circumference and area of a circle. r= 10 phi=3,14
// ● Write a code to find angles of triangle if two angles are given.
// ● Write a code to get difference between dates in days.
// ● Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days




// No. 1
// diketahui p= 10 l=5 ditanyakan Luas dan Keliling
let panjang = 10
let lebar = 5
// rumus Luas L = P x L
let rectangleLuas = panjang * lebar
console.log(rectangleLuas)
// rumus keliling persegi panjang K = 2(p+l) 
let rectangleKeliling = 2 * (panjang + lebar)
console.log(rectangleKeliling)

// 2. diketahui r = 10 phi = 3,14 hasil kaya saya
// ditanyakan diameter , keliling dan luas
// let r = 10
// let phi = 3.14
// // menentukan luas lingkaran L = phi x r x r
// let luasLingkaran = phi * r * r
// console.log(luasLingkaran)
// // menentukan diameter lingkaran d = 2 x r
// let diameterLingkaran =  2 * r 
// console.log(diameterLingkaran)
// // menentukan keliling lingkaran K = phi x diameter
// let kelilingLingkaran = phi * diameterLingkaran
// console.log(kelilingLingkaran)

// better way
// step 1 define  variables: r = 10, phi = 3.14, diameer, kelilingLingkaran, luasLingkaran
let r = 10; phi = 3.14; let diameter, kelilingLingkaran, luasLingkaran
// step 2  mencari diameter: diameter = 2 x r
diameter = 2 * r
// step 3 mencari kelilingLingkaran = phi x diameter
kelilingLingkaran = phi * diameter
//step 4 mencari luasLingkaran L = phi x r x r
luasLingkaran = phi * r * r
let output = `
    r = ${r},
    phi = ${phi},
    Diameter = 2 x r = ${2 * r},
    Keliling Lingkaran = phi x diameter = ${phi * diameter},
    Luas Lingkaran = phi x r x r = ${phi * r * r}
`
console.log(output)

//3. difference between dates in Days
// step1 define variables : day1, day2, day1ToMs, day2ToMs, msPerDay
let day1 = new Date("2022-10-25")
let day2 = new Date("2022-09-05")
// step2. Konversikan day1 & day2 dalam bentuk ms
let day1ToMs = day1.getTime()// get milisecond since 1 january 1970 - 25 oktober 2022
let day2ToMs = day2.getTime()// get milisecond since 1 january 1970 - 5 September 2022
// step 3 1 hari berapa ms?
let msPerDay = 1000 * 24 * 3600 // second to ms dikali 1000; 24 = 24 jam; 3600 = second per hour
// step 4 convert day1ToMs, day2ToMs, menjadi hari
day1 = day1ToMs / msPerDay
day2 = day2ToMs / msPerDay
totalHari = day1 - day2
let hasil = `perbedaan hari dalam tanggal diatas adalah ${totalHari} hari`
console.log(hasil)


// ● Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

// step1 days 10000; 1tahun = 365.25 hari; 1bulan = 30 hari 1hari = 1hari
// // step2 tentunkan rumusnya tahun
let totalDays = 10000 //days
let years = totalDays / 365
let totalYears = Math.floor(years) 
console.log(totalYears)

// // step3 tentunkan rumus bulan nya
let totalMonth = totalDays - (years * 365)
let months = totalMonth / 30
let estimateMonth = Math.floor(months);
console.log(estimateMonth)
// let tahun1 = Math.ceil(totalDays / years)

// ● Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

// Exercise Nomer 5
// Step1. Menentukan variabel hari terlebih dahulu
let jmlh_hari = 4000
// Step2. Menentukan Tahun
let tahun = (jmlh_hari / 365)
console.log(tahun.toPrecision(1))
// Step3. Menentukan Bulan
let bulan = (jmlh_hari % 365 / 30)
console.log(bulan.toPrecision(1))
// Step4. Menentukan Hari 
let hari = (jmlh_hari % 365 % 30)
console.log(hari.toPrecision(1))
// Step5. Menggabungkan Tahun, Bulan dan Hari
console.log(`dari ${jmlh_hari} hari, terdapat ${tahun.toPrecision(2)} tahun, ${bulan.toPrecision(2)} bulan, dan ${hari.toPrecision(2)} hari`)

