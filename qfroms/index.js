// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(record) {
        this.stack1.push(record);
    }

    remove() {
        let fullStack = this.stack1.peek()? this.stack1 : this.stack2;
        let emptyStack = this.stack1.peek()? this.stack2 : this.stack1;
        while(fullStack.peek()) {
            emptyStack.push(fullStack.pop());
        }
        let popElement = emptyStack.pop();
        while(emptyStack.peek()) {
            fullStack.push(emptyStack.pop());
        }

        return popElement;
    }

    peek() {
        let fullStack = this.stack1.peek()? this.stack1 : this.stack2;
        let emptyStack = this.stack1.peek()? this.stack2 : this.stack1;
        while(fullStack.peek()) {
            emptyStack.push(fullStack.pop());
        }
        let peekElement = emptyStack.peek();
        while(emptyStack.peek()) {
            fullStack.push(emptyStack.pop());
        }

        return peekElement;
    }

}

module.exports = Queue;
