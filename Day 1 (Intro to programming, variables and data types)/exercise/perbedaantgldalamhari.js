// ● Write a code to get difference between dates in days.

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

