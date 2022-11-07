// A stack is a data structure that holds a list of elements. A stack allows operations at one end only. This feature makes it LIFO data structure. LIFO stands for Last-in-first-out.

class Stack{
    #maxSize;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    push(element){
        if(this.#maxSize === this.#container.length){
            console.log("Data Full!")
        }else{
            this.#container.push(element)
        }
    }

    pop(){
        this.#container.pop()
    }

    get(){
        console.log(this.#container)
    }
}

let nStack = new Stack()

nStack.push(1)
nStack.push(2)
nStack.push(3)
nStack.push(4)
nStack.push(5)
nStack.push(6)
nStack.push(7)
nStack.push(8)
nStack.push(9)
nStack.push(10)
nStack.push(1)

nStack.get()