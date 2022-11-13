// ● Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

let pyramid = (height) => {
    let output = '';
    for(let i=1; i<=height; i++){
        for(let a=1; a<=i; a++){
            output += a + ' ';
        }
        console.log(output);
        output = '\n';
    }
}
pyramid(10)
