// The queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).
// Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.

class Queue{
    #container = []

    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        this.#container.shift()
    }

    getContainer(){
        console.log(this.#container)
    }
}

let nQue = new Queue()
nQue.enqueue("A")
nQue.enqueue("B")
nQue.enqueue("C")
nQue.enqueue("D")
nQue.dequeue()
nQue.getContainer()