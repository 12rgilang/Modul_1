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

