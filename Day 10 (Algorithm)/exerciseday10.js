// Upper Case wave
// gilang --> output: Gilang, gIlang, giLang, dst

// MAxRange
// Ex. (Angkapertama, MAxRange, Range) --> (2, 10, 2) --> (2, 4, 6, 8, 10)
//                                     --> (3, 5, 1) --> (3, 4, 5) 

// 1.
// note join harus digunakan pada array
// let myName = "gilang"
// myName = myName.split("")
// let arrName = ""

// for(let i=0; i< myName.length; i++){
//     myName[i] = myName[i].toUpperCase()
//     arrName += myName.join("") + "\n"
//     myName[i] = myName[i].toLowerCase()
// }

// console.log(arrName)

// jika menggunakan function
// function MyName(name){
//     name = name.split("")
//     let arrName = ""

//     for(let i=0; i< name.length; i++){
//         name[i] = name[i].toUpperCase()
//         arrName += name.join("") + "\n"
//         name[i] = name[i].toLowerCase()
//     }
//     return arrName
// }

// console.log(MyName("gilang ramadhan"))

    // // 2. 
    // function MaxRange(AngkaPertama, MAxRange, Range){
    //     let newArr = []
    //     for(i=AngkaPertama; i<=MAxRange; i+=Range){
    //         newArr.push(i)
    //     }

    //     return newArr
    // }
    // console.log(MaxRange(2,10,2))

