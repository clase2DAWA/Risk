class Territory {

    constructor(name, jsonData) {
        this.name = name;
        this.army = 0;
        this.neighbors=[];
        this.jsonData = jsonData;
    }

    getName() {
        return this.name;
    }

    setArmy(army) {
        this.army = army;
    }

    getJsonData(){
        return this.jsonData;
    }

    addNeighbor(neighbor, territory){
        this.neighbors.push({
            "neighbor": neighbor,
            "territory": territory
        });
    }

    
}

export { Territory };