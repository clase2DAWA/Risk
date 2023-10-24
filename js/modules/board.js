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

    setNeighbor(map){
        for (let item of map.continents) {
            for (let territory of item.territories) {
                this.searchTerritory(territory.name).neighborTopLeft = this.searchTerritory(territory.TopLeft);
                this.searchTerritory(territory.name).neighborTop = this.searchTerritory(territory.Top);
                this.searchTerritory(territory.name).neighborTopRight = this.searchTerritory(territory.TopRight);
                this.searchTerritory(territory.name).neighborRight = this.searchTerritory(territory.Right);
                this.searchTerritory(territory.name).neighborBottomRight = this.searchTerritory(territory.BottomRight);
                this.searchTerritory(territory.name).neighborBottom = this.searchTerritory(territory.Bottom);
                this.searchTerritory(territory.name).neighborBottomLeft = this.searchTerritory(territory.BottomLeft);
                this.searchTerritory(territory.name).neighborLeft = this.searchTerritory(territory.Left);
            }
        }
    }
}

export { Board }