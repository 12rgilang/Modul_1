
// 1. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the words length is even, return the middle 2 characters
// getMiddle(test) should return "es" 
// getMiddle("testing") should return "t" 
// getMiddle("middle") should return "dd" 
// getMiddle("A") should return "A"

// buat variable yang menampung data tersebut
// kemudian ubah menjadi string dan bagi dua string tersebut
function MiddleWord(name)
{
  let str = Math.floor(name.length / 2);
  let result = name[str]
  if(name.length % 2 === 0 && str > 0) {
    result = name[str-1] + result;

  }
  return result;
}


console.log(MiddleWord("gilang ramadhana"))