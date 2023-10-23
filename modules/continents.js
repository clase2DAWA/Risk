import { Terrytory } from "./territory.js";

let Continent = class {
    constructor() {
        this.territories = [];
    }

    europe() {
        let spain = new Terrytory("Spain");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": spain
        });
        let french = new Terrytory("French");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": french
        });
        let italy = new Terrytory("Italy");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": italy
        });
        let portugal = new Terrytory("Portugal");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": portugal
        });
        for (let item of this.territories) {
            if (item.territory.getName() == "Spain") {
                item.territory.assignNeighbor(portugal);
                item.territory.assignNeighbor(french);
            }
            if (item.territory.getName() == "french") {
                item.territory.assignNeighbor(spain);
                item.territory.assignNeighbor(italy);
            }
            if (item.territory.getName() == "portugal") {
                item.territory.assignNeighbor(spain);
            }
            if (item.territory.getName() == "italy") {
                item.territory.assignNeighbor(french);
            }
            
        }
    }

    africa() {
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": new Terrytory("Morroco")
        });
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": new Terrytory("Argelia")
        });
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": new Terrytory("Libya")
        });
    }

}

export { Continent };