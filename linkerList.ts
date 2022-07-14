import {Node} from "./quanlydiemsinhvien"

export class LinkerList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: T, score: number): void {
        let node = new Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLast(name: T, score: number): void {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        let node = new Node(name, score);
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    showList(): T[] {
        let listStudent = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listStudent.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listStudent;
    }

    totalStudentsFail() {
        let currentNode = this.head;
        let count = 0;
        while (currentNode !== null) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }

    listStudentMaxScore() {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() == this.findMaxScore()) {
                console.log(currentNode.getName())
            }
             currentNode = currentNode.next;
        }
    }
    findByName(name:T) {
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            if (name === currentNode.getName()) {
                console.log(currentNode.readData())
            }currentNode = currentNode.next;
        }
    }


    private findMaxScore() {
        let currentNode = this.head;
        let max = currentNode.getScore();
        for (let i = 0; i < this.size; i++) {
            let currentNode1 = currentNode.next;
            if (max < currentNode1.getScore()) {
                max = currentNode1.getScore()
            }
        }
        return max;
    }
}

