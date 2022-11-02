//
// Hitungan berdasarkan DOB (Day of Birth)
function GetAge(dobInput){
        let dob = new Date(dobInput)
        let now = new Date()

        let dobToMs = dob.getTime()
        let nowToMs = now.getTime()
        let msPerDay = 1000 * 24 * 3600 * 365 //(rumus mudahnya menggunakan 3.15576e+10) // 1000 = milisecond, 24 = 1 hari, 3600 = , 365 = setahun

        let dobInYear = dobToMs / msPerDay
        let nowInYear = nowToMs / msPerDay
        // console.log(dobInYear)
        // console.log(nowInYear)
        nowInYear - dobInYear
        console.log(nowInYear - dobInYear)
        console.log(Math.floor(nowInYear - dobInYear))
        
        return Math.floor(nowInYear - dobInYear)
        }
    
    function CalculateStudent(arr){
        let score = [] // [100, 99,98]
        let age = []
        
        for(let i=0; i<arr.length; i++){
            score.push(arr[i].score)
            age.push(arr[i].getDob())
        }
        
        let scoreMin = Math.min(...score)
        let scoreMax = Math.max(...score)
        let average = score.reduce(
            (a, b) => (a + b)  // syntax asli nya seperti ini
        );
        average = Math.floor(average / arr.length)
        
        let ageMin = Math.min(...age)
        let ageMax = Math.max(...age)
        let rata = age.reduce(
            (a, b) => (a + b)
        );
        rata = Math.floor(rata / arr.length)

        let res =[{
            data: "Score",
            min: scoreMin,
            max: scoreMax,
            average: average

        },
        {
            data: "Age",
            min: ageMin,
            max: ageMax,
            rata: rata
        }
    ]
        return res
    }
    
  

let students = [
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        dob: "1997-01-12",
        getDob(){  // function di dalam object disebut METHOD
            return GetAge(this.dob)
        },
        score: 100  
    },
    {
        name: "Anjar",
        email: "anjar@gmail.com",
        dob: "1995-5-20",
        getDob(){  // function di dalam object disebut METHOD
            return GetAge(this.dob)
        },
        score: 99
    },
    {
        name: "Aswin",
        email: "aswin@gmail.com",
        dob: "2006-07-21",
        getDob(){  // function di dalam object disebut METHOD
            return GetAge(this.dob)
        },
        score: 98
    }
]


console.log(CalculateStudent(students))
// console.log(GetAge(students))

