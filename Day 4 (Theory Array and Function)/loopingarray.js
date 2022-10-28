//setiap data yang punya index dapat kita looping

let friuts = ["Apel", "jeruk", "Mangga"]

// contoh pertama
// for(let buah of friuts){
//     console.log(buah)
// }

//contoh kedua
for(let buah of friuts){
    if(buah === "jeruk"){
        console.log("Jeruk asem")
    }
} 


//jika looping secara manual
for(let i=0; i <= friuts.length-1; i++){
    console.log(friuts[i])
}

let vokal ="aiueo", name = "Purwadhika"