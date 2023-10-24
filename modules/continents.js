import { Territory } from "./territory.js";

let Continent = class {
    constructor() {
        this.territories = [];
    }

    europe() {
        let spain = new Terrytory("Spain");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": spain,
            "name": "Spain",
            "neighbor": []
        });
        let french = new Terrytory("French");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": french,
            "name": "French",
            "neighbor": []
        });
        let italy = new Terrytory("Italy");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": italy,
            "name": "Italy",
            "neighbor": []
        });
        let portugal = new Terrytory("Portugal");
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": portugal,
            "name": "Portugal",
            "neighbor": []
        });

        for (let item of this.territories) {
            if (item.territory.getName() == "Spain") {
                item.neighbor.push(portugal);
                item.neighbor.push(french);
            }
            if (item.territory.getName() == "French") {
                item.neighbor.push(spain);
                item.neighbor.push(italy);
            }
            if (item.territory.getName() == "Portugal") {
                item.neighbor.push(spain);
            }
            if (item.territory.getName() == "Italy") {
                item.neighbor.push(french);
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