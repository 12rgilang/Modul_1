let students = [
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        // date: "...",
        // age: ,
        score: 100
    },
    {
        name: "Anjar",
        email: "anjar@gmail.com",
        // date: "...",
        // age: ,
        score: 99
    },
    {
        name: "Aswin",
        email: "aswin@gmail.com",
        // date: "...",
        // age: ,
        score: 98
    }
]

function CalculateStudent(arr){
    let score = [] // [100, 99,98]
    
    for(let i=0; i<arr.length; i++){
        score.push(arr[i].score)
    }
    
    let scoreMin = Math.min(...score)
    let scoreMax = Math.max(...score)
    let average = score.reduce(
        (a, b) => a + b / arr.length
    );
    console.log(average)
}

CalculateStudent(students)
