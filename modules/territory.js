let Terrytory = class {
    constructor(name) {
        this.name = name;
        this.neighbor = [];
    }

    assignNeighbor(terrytory) {
        this.neighbor.push(terrytory.getName());
    }
    
    getName() {
        return this.name;
    }
}

export { Terrytory };