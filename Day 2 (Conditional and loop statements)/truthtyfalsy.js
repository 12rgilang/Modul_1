// Falsy
// ● "" (empty string) ●0
// ● null
// ● undefined
// ● NaN

// Truthy
// ● " " (blank character string) ● [] (empty array)
// ● {} (empty object)
// ●1
// ● "1" (string)
// ● "0" (string)
// ● "false" (string)
// ● "true" (string)

//  Case. memvalidasi inputan user ketika regsiter
let username = " " // empty string berarti falsy

if(username){
    console.log("data lengkap")
}else{
    console.log("data tidak lengkap")
}

