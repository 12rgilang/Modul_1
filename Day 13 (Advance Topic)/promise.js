let startPromise = new Promise((resolve, rejected) => {
    let response =  "Sama" // bisa false / true atau pengkondisian

    if(response === "tidak Sama"){
        resolve("Response Success")
    }else{
        rejected("Response Gagal")
    }
})

startPromise
.then((res) => {
    console.log("Masuk ke .then")
    console.log(res)
})
.catch((err) => {
    console.log("Masuk ke .Catch")
    console.log(err)
})
.finally(() => console.log("Finallsy SElalu RUnning!"))