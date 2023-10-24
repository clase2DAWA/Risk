import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {

    constructor(boardElement) {
        this.board = boardElement;
        this.territories = [];
        this.createTerritory(map);

    }

    createTerritory(map) {
        for (let continent of map.continents) {
            for (let territory of continent.territories) {
                console.log(continent, territory)
                this.territories.push({
                    "posX": 0,
                    "posY": 0,
                    "territory": new Territory(territory.name)
                })
            }
        }
    }

    searchTerritory(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item.territory;
            }
        }
    }
}

export { Board }