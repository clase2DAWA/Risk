class Territory {

    constructor(name, element) {
        this.name = name;
        this.army = 0;
        this.neighbors=[];
        this.element = element;
    }

    getName() {
        return this.name;
    }

    setArmy(army) {
        this.army = army;
    }

    addNeighbor(neighbor){
        this.neighbors.push(neighbor);
    }

    
}

export { Territory };