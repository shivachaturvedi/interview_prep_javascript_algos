// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let headRef = this.head;
        if( headRef ){
            while(headRef.next) {
                counter++;
                headRef = headRef.next;
            }
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let headRef = this.head;
        if( headRef ){
            while(headRef.next) {
                headRef = headRef.next;
            }
        }
        return headRef;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if( this.head )
            this.head = this.head.next;
        else
            this.head.null;
    }

    removeLast() {
        let headRef = this.head;
        let follower = this.head;
        if(headRef) {
            if( headRef.next ) {
                while(headRef.next) {
                    follower = headRef;
                    headRef = headRef.next;
                }
            } else {
                this.head = null;
            }
            follower.next = null;
        }
    }

    insertLast(data) {
        let newNode = new Node(data);
        let headRef = this.head;
        if( headRef ) {
            while( headRef.next ){
                headRef = headRef.next;
            }
            headRef.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    getAt(index) {
        let counter = 0;
        let headRef = this.head;
        if( headRef ) {
            while (counter < index ){
                headRef = headRef.next;
                counter++;
            }
        } else {
            // No nodes found
        }
        return headRef;
    }

    removeAt(index) {
        let counter = 0;
        let headRef = this.head;
        let follower = this.head;

        if( headRef ){
            if( index === 0 ){
                this.head = this.head.next;
            } else {
                while( counter < index && headRef.next ){
                    counter++;
                    follower = headRef;
                    headRef = headRef.next;
                }
                follower.next = headRef.next;
            }
        } else {

        }
    }

    insertAt(data, index) {
        let counter = 0;
        let headRef = this.head;
        let follower = this.head;
        let newNode = new Node(data);
        if( index === 0 ) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (index >= this.size()){
            this.insertLast(data);
        } else {
            while( counter < index ){
                counter++;
                follower = headRef;
                headRef = headRef.next;
            }
            follower.next = newNode;
            newNode.next = headRef;
        }
    }

    forEach(fn) {
        let headRef = this.head;
        while ( headRef ) {
            fn(headRef);
            headRef = headRef.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }


}

module.exports = { Node, LinkedList };
