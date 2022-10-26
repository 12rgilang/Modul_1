// let & cons --> mengenal scope
//            --> variable yang di declare di global scope, dia dapat diakses di local scope
//            --> variable yang di declare di local scope, tidak bisa di akses di global scope

{
    // localScope
}

{   // global scope
    {
        // local scope
    }
}

// example
{
    let number = 10
    {
        console.log(number)
    }
}

// example , karena javascript membaca dari atas ke bawah maka yang terdeteksi terakhir adalah number 10
let number = 100
{
    let number = 10 
    {
        console.log(number)
    }
}