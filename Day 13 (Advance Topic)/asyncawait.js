let startPromise = new Promise((resolve, rejected) => {
    let response =  "Sama" // bisa false / true atau pengkondisian

    if(response === "Sama"){
        resolve("Response Success")
    }else{
        rejected("Response Gagal")
    }
})

const tryAndCatch = async() => {
    try {
        let result = await startPromise // apabila succes akan disimpan ke result. apabila galgal, langsung pindah kedalam eror
        console.log(result)
    } catch (error) {
        console.log("Rejected diterima .catch")
    } finally {
        console.log("tetap dijalankan")
    }
}

tryAndCatch()