// buatlah sebuah function untuk memvalidasi data email dari setipa users.
// apabila email seuai, ubah isVerified menjadi true,
// apabila email tidak sesuai, isVerified tetap null


function GetEmail(arr){

    for(let i=0; i<arr.length; i++){
        if(arr[i].email.includes("@")){
            arr[i].isVerified = true
        }
    }
    return arr
}


let users = [
    {
        username: "Bachtiar",
        email: "bachtiar@gmail.com",
        isVerified: null,
    },
    {
        username: "rafli",
        email: "rafli@gmail.com",
        isVerified: null,
    },
    {
        username: "vero",
        email: "verooyahoo.co.id",
        isVerified: null,

    }
]

console.log(GetEmail(users))