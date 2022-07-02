class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    }

    enqueue(val) {
        this.pushStack.push(val);
        this.size = this.pushStack.length + this.popStack.length;
        
    }

    dequeue() {
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.popStack.pop();
        }

        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }

        this.size = this.pushStack.length + this.popStack.length - 1;
        return this.popStack.pop();
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
            
        }else{
           let temp = this.first;
           this.first = newNode;
           this.first.next= temp;
        }
        this.length++;     
        return this.length;
    }

    pop(){
        if (this.length === 0) return null;

        let temp = this.first;

        if (this.length === 1){
            this.last = null;
        }        
        this.first = this.first.next;        
        this.length--;
        return temp;
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.dequeue();

