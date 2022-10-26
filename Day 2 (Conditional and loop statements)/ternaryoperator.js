let txt = "Javascript"

if(txt === "Javascript"){
    console.log("Javascript")
}else{
    console.log("Not JavaScript")
}

// Ternary opertator --> (condition if) ? dalam bentuk true, apa bila tidak true | gunakan : untuk menampilkan false
txt === "Javascript"? console.log("Javascript") : console.log("Not Javascript")
//
console.log(txt === "Javascript" ? "Javascript" : "Not Javascipt")


let point = 10
if(point < 5){
    console.log("Point Kurang")
}else if(point < 8){
    console.log("point cukup")
}else{
    console.log("point lebih")
}
// ternary operation else if
point < 5? console.log("point kurang") : point < 8? console.log("point cukup") : console.log("Poin lebih")

// metode modul
console.log(point < 5? "Point Kurang" : point < 8? "Point Cukup" : "Point lebih" )