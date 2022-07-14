export class Node<T> {
    name: T;
    score: number;
    next: Node<T> | null = null;

    constructor(name: T, score: number) {
        this.name = name;
        this.score = score;
    }
    readData():object{
        return {name:this.name,
            score:this.score}
    }
    getScore():number{
        return this.score
    }
    getName():T{
        return this.name;
    }

}
