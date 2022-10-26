// if
// if(condition){apabila kondisinya bernilai true
// ...
// }
let age = 20
if(age < 18){
    console.log("bole bole.")
}
// if - else
// iif(condiiton){apabila kondisinya bernilai true
// ...
// }
// )else{action default apabila kondisi pertama gagal/bernilai false
//  
// }
let ageUser = 20
if(ageUser < 18){
    console.log("bole bole.")
}else {
    console.log("gaboleee")
}


//if - else if - else if - ..tidak terhingga.. - else
// if(condiiton){apabila kondisinya bernilai true
// ...
// }else if(condition){
// ...
// }else{action default apabila kondisi pertama gagal/bernilai false
// ...
//} 
let nilaiModul = 1000
if(nilaiModul < 80){
    console.log('remedial')
}else if(nilaiModul <= 100){
    console.log('Selamat anda Lulus')
}else{
    console.log('tidak mengerjakan')
};

// Nested if --- id didalam if
let point = 75
if(point > 0 ){
    if(point > 50){
    console.log('point terpenuhi')
    }else{
        console.log('point tidak terpenuhi')
    }
}else{
    console.log('tidak mengerjakan')
}

let nilai = -9
if(nilai >= 0){
    if(nilai < 45){
        console.log("Tidak terpenuhi")
    }else{
        console.log("Terpenuhi")
    }
}else{
    if(nilai > -10){
        console.log("Minus")
    }
}