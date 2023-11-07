class Territory {

    constructor(name) {
        this.name = name;
        this.army = 0;
        this.neighbors = [];
    }

    getName() {
        return this.name;
    }

    setArmy(army) {
        this.army = army;
    }

    addNeighbor(neighbor, territory) {
        this.neighbors.push({
            "neighbor": neighbor,
            "territory": territory
        });
    }
}

export { Territory };