// 2. Buatlah sebuah handling error untuk sebuah promise dengan beragam bentuk respon sbb:
// {status: 200, isError: False , message: "Login success", isDAta: true, data: {username = "gilang", isVerified: false apabila status: 200 & isError: false ---> console.log datanya
// {status: 200, isError: true, message: "Username already exist", isData: true, data: {}}
// - Apabila status: 200 & isError: False ---> throw messagenya
// {status: 500, isError: true, message: "Error on server", isData: true, data: {}}
// -apabila status: 500 & isError: true ---> Tampilan error messagenya di catch

let startProject = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: true,
        message: "Login success",
        isData: true,
        data: {username: "Gilang", isVerified: false}
    }

    if(response.status === 200 && response.isError === false){
        resolve(response)
    }
    else if(response.status === 200 && response.isError === true){
        resolve(response)
    }else (
        rejected(response.message)
    )
})


// menggunakan Promise
startProject
.then((res) => {
    if(res.status === 200 && res.isError === false){
        console.log(res.data)
    }else {
        throw res.message
    }
})
.catch((err) => {
    console.log(err)
})








// const tryAndCatch = async() => {
//     try {
//         let result = await startProject

       
//         if(response.status === 200 && response.isError === false){
//             throw "Username already exist!"
//         }else if(result.Username && result.isError === false){
//             throw "Error 500"
//         }else {
//             console.log("Login succes")
//         }
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// tryAndCatch()