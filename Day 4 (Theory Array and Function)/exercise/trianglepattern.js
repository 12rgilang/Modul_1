//triangle patern
//setiap perbedaan i dan j selisih 3, karena index dimuali dari 0
let star =''
for(let i=12; 0 <= i; i--){
    for(let j=0; j <= 15; j++){
       if(j >= i && j <= 15-i){
           star += "*"
       }else{
           star += '-'
       }
    }
    star += '\n'
}
console.log(star)
