//Buatlah program untuk memvalidasi username user
// Apabila username exist, tampilkan console.log("Username already exist")
// Apabila username not exist , simpan datanya

function NewUser(dataUser){

    for(let i=0; i<users.length; i++){
        if(users[i].username === dataUser[0].username){
            return "Username already Exist"
        }
    }
    users.push(dataUser[0])
    return users
}

let users = [
    {
        username: "bachtiar",
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
        email: "verooyahoo@.co.id",
        isVerified: null,

    }
]

console.log(NewUser(
    [{
    username: "vero",
    email: "verooyahoo@.co.id",
    isVerified: null,
    }]
    ))