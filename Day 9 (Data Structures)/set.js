// The main Feature of Set is it doesn’t allow duplicate values (unique values). ES6 provides a new data structure named Set that stores a collection of unique values of any type, whether primitive values (like strings or integers) or object references (like arrays or function).

//Cara kelas
class Set{
    #contanier = []

    addElement(element){
        if(this.#contanier.length){
            //Check datanya
            if(this.#contanier.includes(element)){
                console.log("Data already exist")
            }else{
                this.#contanier.push(element)
            }
        }else{
            // pushj
            this.#contanier.push(element)
        }
    }
    
    getContainer(){
        return this.#contanier
    }
}

let nSEt = new Set()
nSEt.addElement("A")
nSEt.addElement("A")
nSEt.addElement("C")
nSEt.addElement("B")
nSEt.addElement("B")
nSEt.addElement("B")
console.log(nSEt.getContainer())


// Cara lain
class Set{
    #container = []

    nSet(element){
        if(!this.#container.includes(element)){
            this.#container.push(element)
        }
    }

    getContainer(){
        return this.#container
    }

}

let fuit = new Set()
fuit.nSet("apple")
fuit.nSet("apple")
fuit.nSet("apple")
fuit.nSet("jackfruit")
fuit.nSet("apple")
console.log(fuit.getContainer())