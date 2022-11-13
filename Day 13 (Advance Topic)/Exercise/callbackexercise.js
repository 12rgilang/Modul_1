// 1. Buatlah 2 buah function. Function 1 untuk memvalidasi email. Function-2 untuk nge-return hasil validasi (true/false). Buatlah Menggunakan indirect callback maupun direct callback.

// indirect callback
function Validate(email){
    if(email.includes("@")){
        return true
    }else{
        return false
    }
}

function Output1(data, cb){
    let result = data
    return cb(result)
   
}

console.log(Output1("gilang.ramadhangmail.com", Validate))

//Direct callback
function Output2(data, cb){
    let result = data
    return cb(result)
}

console.log(Output2("gilang.ramadhan@gmail.com", function Validate(email){
    if(email.includes("@")){
        return true
    }else{
        return false
    }
} ))