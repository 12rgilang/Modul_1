// 2. diketahui r = 10 phi = 3,14 hasil kaya saya
// ditanyakan diameter , keliling dan luas
let r = 10
let phi = 3.14
// menentukan luas lingkaran L = phi x r x r
let luasLingkaran = phi * r * r
console.log(luasLingkaran)
// menentukan diameter lingkaran d = 2 x r
let diameterLingkaran =  2 * r 
console.log(diameterLingkaran)
// menentukan keliling lingkaran K = phi x diameter
let kelilingLingkaran = phi * diameterLingkaran
console.log(kelilingLingkaran)

// better way
// step 1 define  variables: r = 10, phi = 3.14, diameer, kelilingLingkaran, luasLingkaran
let r = 10; phi = 3.14; let diameter, kelilingLingkaran, luasLingkaran
// step 2  mencari diameter: diameter = 2 x r
diameter = 2 * r
// step 3 mencari kelilingLingkaran = phi x diameter
kelilingLingkaran = phi * diameter
//step 4 mencari luasLingkaran L = phi x r x r
luasLingkaran = phi * r * r
let output = `
    r = ${r},
    phi = ${phi},
    Diameter = 2 x r = ${2 * r},
    Keliling Lingkaran = phi x diameter = ${phi * diameter},
    Luas Lingkaran = phi x r x r = ${phi * r * r}
`
console.log(output)