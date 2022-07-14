interface IArrayList<T> {
    add(data: T): void;
    get(index: number): T;
    size(): number;
    remove(): void;
}
class ArrayList<T> implements IArrayList<T>{
    container: Array<T>;

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {
        return this.container[index];
    }

    remove(): void {
    }

    size(): number {
        return 0;
    }
}