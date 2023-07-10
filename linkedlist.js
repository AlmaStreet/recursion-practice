class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
        }
        else {
            let node = this.head;
            while(node.next) {
                node = node.next;
            }

            node.next = new Node(value);
        }
        this.size += 1;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size += 1;
    }

    size_value() {
        return this.size;
    }

    head_value() {
        return this.head;
    }

    tail_value() {
        let node = this.head;
        for (let i = 0; i < this.size - 1; i++) {
            node = node.next;
        }
        return node;
    }

    at(index) {
        let node = this.head
        while (index > 0) {
            node = node.next
            index -= 1;
        }

        return node
    }

    pop() {
        let node = this.head;
        for (let i = 0; i < this.size - 2; i++) {
            node = node.next;
        }

        node.next = null;
        this.size -= 1;
    }

    contains(value) {
        let node = this.head;
        while(node) {
            if (node.value === value) return true
            node = node.next;
        }

        return false
    }

    find(value) {
        let node = this.head;
        let count = 0;
        while(node) {
            if (node.value === value) return count
            node = node.next;
            count += 1
        }
        return null;
    }

    toString() {
        let node = this.head;
        let string = '';
        while(node) {
            string += `( ${node.value} ) -> `;
            node = node.next;
        }
        string += `( ${node} )`;
        console.log(string);
    }

    insertAt(value, index) {
        let node = this.head
        while (index > 1) {
            node = node.next
            index -= 1;
        }

        let newNode = new Node(value);
        let next = node.next;
        node.next = newNode;
        newNode.next = next;
        this.size += 1;
    }

    removeAt(index) {
        let node = this.head
        while (index > 1) {
            node = node.next
            index -= 1;
        }

        node.next = node.next.next
        this.size -= 1;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


let linklist = new LinkedList()
linklist.append(1)
linklist.toString()
linklist.append(2)
linklist.toString()
linklist.append(3)
linklist.toString()
console.log(linklist.size_value())
linklist.prepend(0)
linklist.toString()

console.log(linklist.head_value())
console.log(linklist.tail_value())
console.log(linklist.at(3));
console.log(linklist.pop());
linklist.toString()

console.log(linklist.contains(3));
console.log(linklist.contains(2));
console.log(linklist.find(3));
console.log(linklist.find(2));
linklist.toString()
console.log(linklist.insertAt(100, 1));
linklist.toString()
console.log(linklist.removeAt(3));
linklist.toString()